import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';

import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  selected: Patient;
  
  constructor(private ps:PatientService) { 
    this.selected = new Patient();
  }

  ngOnInit() {
     this.getpatients();
  }
  getpatients(){
    this.ps.getpatients().subscribe((patients:Patient[])=>{
      this.patients=patients;
    })
  }

  edit(pid:number){
     
        this.ps.getpatientbyid(pid).subscribe((patient:Patient)=>{
          this.selected = patient;
        },
        error=>{
          alert("error" + pid);
        });
 }

 delete(pid:number){
   this.ps.deletepatients(pid).subscribe((patient:Patient)=>{
     this.getpatients();
   });
 }


}
