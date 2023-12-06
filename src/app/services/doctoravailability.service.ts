import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtclientService } from './jwtclient.service';
import { DoctorAvailability } from '@app/model/DoctorAvailability';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctoravailabilityService {

  constructor(private http: HttpClient,private jwtservice:JwtclientService) {}
  baseURL: string = 'http://localhost:8383/api/doctoravailability/';

  add(formData: DoctorAvailability): Observable<DoctorAvailability> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(token);
      console.log(headers);
      return this.http.post<DoctorAvailability>(this.baseURL + 'add',formData, { headers });
    } else {
      return new Observable<DoctorAvailability>();
    }
  }

  getAll():Observable<DoctorAvailability[]>{

    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.get<DoctorAvailability[]>(this.baseURL + 'getall', { headers });
    }
      else {
        return new Observable<DoctorAvailability[]>();
       } 

}
deleteById(doctorAvailabilityId: number): Observable<string> {
  const token = this.jwtservice.getToken();
   console.log(token);
   if (token) {
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  console.log(headers);
    return this.http.delete<string>(this.baseURL +`delete/${doctorAvailabilityId}`,{headers});
   }
   else{
    return new Observable<string>();
   }
  }
  
  update(body: DoctorAvailability): Observable<DoctorAvailability> {
    const token = this.jwtservice.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      console.log(headers);
      return this.http.put<DoctorAvailability>(this.baseURL + 'update',body, { headers });
    } else {
      return new Observable<DoctorAvailability>();
    }
}

}
