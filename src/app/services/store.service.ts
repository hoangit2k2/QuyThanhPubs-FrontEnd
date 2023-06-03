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
}
