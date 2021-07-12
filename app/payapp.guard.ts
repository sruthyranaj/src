import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
@Injectable({
   providedIn: 'root'
})
export class PayappGuard implements CanActivate {

   constructor(private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;

          return this.checkLogin(url);
      }

      checkLogin(url: string): true | UrlTree {
         console.log("Url: " + url)
         let val: string = localStorage.getItem('isUserLoggedIn');

         if(val != null && val == "true"){
            if(url == "/login")
               this.router.parseUrl('/');
            else 
               return true;
         } else {
            return this.router.parseUrl('/login');
         }
      }
}