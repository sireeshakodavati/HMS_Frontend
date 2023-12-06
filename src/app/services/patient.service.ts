import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtclientService } from './jwtclient.service';
import { Patient } from '@app/model/Patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  constructor(private http: HttpClient,private jwtservice:JwtclientService) {}
  baseURL: string = 'http://localhost:8383/api/patient/';

  getAll():Observable<Patient[]>{

    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.get<Patient[]>(this.baseURL + 'fetchAll', { headers });
    }
      else {
        return new Observable<Patient[]>();
       } 

}

deleteById(patientId: number): Observable<string> {
  const token = this.jwtservice.getToken();
   console.log(token);
   if (token) {
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
    return this.http.delete<string>(this.baseURL +`delete/${patientId}`,{headers});
   }
   else{
    return new Observable<string>();
   }
  }
  update(body: Patient): Observable<Patient> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.put<Patient>(this.baseURL + 'update',body, { headers });
    } else {
      return new Observable<Patient>();
    }
}
}
