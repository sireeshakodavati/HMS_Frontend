import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '@app/model/Appointment';
import { Observable } from 'rxjs';
import { JwtclientService } from './jwtclient.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient,private jwtservice:JwtclientService) {}
  baseURL: string = 'http://localhost:8383/api/appointment/';

  add(formData:Appointment): Observable<Appointment> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<Appointment>(this.baseURL +'add',formData, { headers });
    } else {
      return new Observable<Appointment>();
    }
  }

  getAll():Observable<Appointment[]>{

    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.get<Appointment[]>(this.baseURL + 'getall', { headers });
    }
      else {
        return new Observable<Appointment[]>();
       } 

}

deleteById(appointmentId: number): Observable<string> {
  const token = this.jwtservice.getToken();
   console.log(token);
   if (token) {
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
    return this.http.delete<string>(this.baseURL +`delete/${appointmentId}`,{headers});
   }
   else{
    return new Observable<string>();
   }
  }
  
  update(body: Appointment): Observable<Appointment> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.put<Appointment>(this.baseURL + 'update',body, { headers });
    } else {
      return new Observable<Appointment>();
    }

}
}
