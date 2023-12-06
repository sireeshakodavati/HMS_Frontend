import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientloginService {
  constructor(private http: HttpClient) { }
  baseURL: string = 'http://localhost:8383/api/';

  getdoctorGeneratedToken(requestBody: any) {
    return this.http.post(this.baseURL + "login/patientlogin", requestBody, { responseType: 'text' as 'json' });
  }
 
  authorizationTestForUser(token: any): Observable<boolean> {
  
    const userAuthorized = !!token; 

    return of(userAuthorized); 
  }
}
