import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { StoreService } from "./services/store.service";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";

@Injectable(
    {  providedIn: 'root'}
  )
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private storeService: StoreService, private router: Router, private authService: AuthService){

    }
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const idToken = this.storeService.getAccessToken();

         if (idToken) {
           
              const cloned = req.clone({
                  headers: req.headers.set("Authorization","Bearer "+idToken)
  
              })
              return next.handle(cloned).pipe(
                tap({
                  next: (event) => {
                    if (event instanceof HttpResponse) {
                      if(event.status == 401) {
                        this.router.navigate(["/login"])
                      }
                    }
                    return event;
                  },
                  error: (error) => {
                    if(error.status === 401) {
                        this.router.navigate(["/login"])
                    }
                  }
                }));;
          }
          else{
        
              return next.handle(req);
          }
          
      }
      
  }