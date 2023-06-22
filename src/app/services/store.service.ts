import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  saveCart(nameStore: string, data: any) {
    sessionStorage.setItem(nameStore, JSON.stringify(data));
  }
  removeCart(nameStore: string){
    sessionStorage.removeItem(nameStore);
  }
  getCart(nameStore: string) :any {
    var data = sessionStorage.getItem(nameStore);
    if (!data) return undefined;
    return JSON.parse(data);
  }
  saveAccessToken(accessToken: string) :void {
    sessionStorage.setItem("access_token", accessToken);
  }
  getAccessToken() :string | null {
    var access_token =sessionStorage.getItem("access_token");
    if (!access_token) return null;
    return access_token;
  }
  removeAccessToken() {
    sessionStorage.removeItem("access_token");
  }
}
