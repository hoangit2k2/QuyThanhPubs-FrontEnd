import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  lockScreenTimeout: any;
  constructor() { }

  setScreenTimeout(lockScreenTimeout:any){
    this.lockScreenTimeout = lockScreenTimeout;
  }
  getScreenTimeout(){
    return this.lockScreenTimeout;
  }
  
}
