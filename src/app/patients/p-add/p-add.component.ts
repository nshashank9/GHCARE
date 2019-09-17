import { Component, OnInit, Output, OnChanges, Input ,SimpleChanges} from '@angular/core';
import { PatientService } from 'src/app/patient.service';
import { Patient } from 'src/app/models/patient';
import { EventEmitter } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-p-add',
  templateUrl: './p-add.component.html',
  styleUrls: ['./p-add.component.css']
})
export class PAddComponent implements OnInit,OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
     this.patient = this.selected;
     console.log(this.patient);
  }

  @Output() update:EventEmitter<boolean> = new EventEmitter();
  @Input() selected: Patient;
  patient: Patient = new Patient();

  constructor(private ps:PatientService) { }

  ngOnInit() {
    this.patient.profile = new Profile();
    this.patient.profile.Weight = null;
    this.patient.profile.bloodgroup = null;
  }

  process(patient:Patient):void{
   if(this.isAdded(patient.id)){
    this.ps.addpatients(patient).subscribe((patient:Patient)=>{
      this.update.emit(true);
   },
   error=>{
     alert("error");
   }
   );
   }else{
      this.ps.editpatients(patient).subscribe((patient:Patient)=>{
        this.update.emit(true);
      })
   }
  }
  isAdded(pid:number){
      return isNullOrUndefined(pid)|| pid===0;
  }

}
