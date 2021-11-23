import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = AuthService.getToken();
    console.log(`Bearer_` + token);
    if (!token) return next.handle(req);
    req = req.clone({ setHeaders: {Authorization: `Bearer_` + token }});
    return next.handle(req);
  }
}
