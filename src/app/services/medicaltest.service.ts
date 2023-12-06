import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MedicalTest } from '../model/medicaltest';
import { Observable, catchError, throwError } from 'rxjs';
import { JwtclientService } from './jwtclient.service';

@Injectable({
  providedIn: 'root'
})
export class MedicaltestService {

  constructor(private http: HttpClient,private jwtservice:JwtclientService) {}

  baseURL: string = 'http://localhost:8383/api/medicaltest/';

  add(formData: MedicalTest): Observable<MedicalTest> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<MedicalTest>(this.baseURL + 'add',formData, { headers });
    } else {
      return new Observable<MedicalTest>();
    }

  }

  getAll():Observable<MedicalTest[]>{

    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.get<MedicalTest[]>(this.baseURL + 'getall', { headers });
    }
      else {
        return new Observable<MedicalTest[]>();
       } 

}

deleteById(testId: number): Observable<string> {
  const token = this.jwtservice.getToken();
   console.log(token);
   if (token) {
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
    return this.http.delete<string>(this.baseURL +`delete/${testId}`,{headers});
   }
   else{
    return new Observable<string>();
   }
  }
  update(body: MedicalTest): Observable<MedicalTest> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.put<MedicalTest>(this.baseURL + 'update',body, { headers });
    } else {
      return new Observable<MedicalTest>();
    }

}
}
