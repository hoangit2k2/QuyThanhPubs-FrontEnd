import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class MyDataResolver implements Resolve<any> {


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return true;
    }

}