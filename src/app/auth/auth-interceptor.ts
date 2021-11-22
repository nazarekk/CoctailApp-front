import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = AuthService.getToken();
    if (token != null) {
      authReq = req.clone({ setHeaders: {Authorization: `Bearer_${token}` }});
    }
    return next.handle(authReq);
  }
}
