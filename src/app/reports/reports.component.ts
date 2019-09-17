import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../models/patient';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  patients:Patient[];
 
  oldest:Patient = null;
  heaviest:Patient = null;

  constructor(private pserv:PatientService) { }

  ngOnInit() {
      this.pserv.getpatients().subscribe((patients:Patient[])=>{
        this.patients = patients;
        this.calculate();
      },
      error=>{
        console.log(error);
      });
  }

  calculate():void{
    for(const p of this.patients){
        if(isNullOrUndefined(this.oldest)||p.age > this.oldest.age){
            this.oldest = p;
        }
        if(isNullOrUndefined(this.heaviest)||p.profile.Weight < this.heaviest.profile.Weight){
          this.heaviest = p;
      }
    }
  }

}
