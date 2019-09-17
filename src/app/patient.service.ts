import { Injectable } from '@angular/core';
import { Patient } from './models/patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http:HttpClient) { 
   }

   getpatientbyid(pid:number):Observable<any>{
    return this.http.get("http://localhost:3000/patients/"+pid);
 }
  getpatients():Observable<any>{
     return this.http.get("http://localhost:3000/patients");
  }
  addpatients(patient:Patient):Observable<any>{
      return this.http.post("http://localhost:3000/patients",patient);
  }
  deletepatients(pid:number){
    return this.http.delete("http://localhost:3000/patients/" + pid);
  }
  editpatients(patient:Patient){
    return this.http.put("http://localhost:3000/patients/" + patient.id,patient);
  }
}
