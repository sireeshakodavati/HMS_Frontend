import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Prescription } from '../model/prescription';
import { Observable } from 'rxjs';
import { JwtclientService } from './jwtclient.service';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  constructor(private http: HttpClient,private jwtservice:JwtclientService) {}
  baseURL: string = 'http://localhost:8383/api/prescription/';

  add(formData: Prescription): Observable<Prescription> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<Prescription>(this.baseURL + 'add',formData, { headers });
    } else {
      return new Observable<Prescription>();
    }
  }

  getAll():Observable<Prescription[]>{

    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.get<Prescription[]>(this.baseURL + 'fetchAll', { headers });
    }
      else {
        return new Observable<Prescription[]>();
       } 

}

deleteById(prescriptionId: number): Observable<string> {
  const token = this.jwtservice.getToken();
   console.log(token);
   if (token) {
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
    return this.http.delete<string>(this.baseURL +`delete/${prescriptionId}`,{headers});
   }
   else{
    return new Observable<string>();
   }
  }
  update(body: Prescription): Observable<Prescription> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.put<Prescription>(this.baseURL + 'update',body, { headers });
    } else {
      return new Observable<Prescription>();
    }


}

}