import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtclientService {
 
  baseURL:string='http://localhost:8383/api';
  private doctorUrl: string = 'http://localhost:8383/api/login/';
  private tokenKey: string = 'jwtToken';

  constructor(private http: HttpClient) {}

  getDoctorGeneratedToken(requestBody: any): Observable<string> {
    return this.http.post<string>(this.doctorUrl+'doctorlogin', requestBody,{responseType: 'text' as 'json'});
  }

  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey,token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }
  registerDoctor(requestBody:any)
  {
  return this.http.post(this.baseURL+"/doctor/add",requestBody,{responseType:'text'as 'json'})
   }
   registerPatient(requestBody:any)
   {
   return this.http.post(this.baseURL+"/patient/add",requestBody,{responseType:'text'as 'json'})
   }
    registerAdmin(requestBody:any)
  {
  return this.http.post(this.baseURL+"/admin/add",requestBody,{responseType:'text'as 'json'})
   }

  authorizationTest(token:any){

        let tokenString = "Bearer "+token;

       const headers =  new HttpHeaders().set("Authorization",tokenString);

      return this.http.get(this.baseURL+"/prescription/fetchAll",{headers,responseType:'text' as 'json'});

  }
  
}




