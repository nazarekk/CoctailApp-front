import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import {AuthService} from "./auth.service";
import {catchError,  switchMap} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    console.log(`Bearer_` + token);
    if (!token) return next.handle(req);
    req = req.clone({setHeaders: {Authorization: `Bearer_` + token}});
    return next.handle(req).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          console.log("Token expired")
          return this.authService.refreshToken().pipe(switchMap(() => {
            return next.handle(req.clone({setHeaders: {Authorization: `Bearer_` + this.authService.getToken()}}))}))
        }
        return throwError(error);
      }
    ));
  }
}





