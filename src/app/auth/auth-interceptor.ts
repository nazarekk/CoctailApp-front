import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();
    console.log(`Bearer_` + token);
    if (!token) return next.handle(req);
    req = req.clone({ setHeaders: {Authorization: `Bearer_` + token }});
    return next.handle(req);
  }
}
