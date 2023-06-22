import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import decode from 'jwt-decode';
import { StoreService } from './store.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private storeService: StoreService, private router : Router) { }

  login(username: string, password: string){
   return this.http.post<any>(environment.apiBase+ `auth/login`,{username:username, password});
  }
  logout(){
    this.storeService.removeAccessToken();
    this.router.navigate(['/login'])
  }
  getAdminFromToken():any{
  const accessToken = this.storeService.getAccessToken();
  if (accessToken){
    return (decode(accessToken) as any).username;
  }
  return undefined;
  }
}
