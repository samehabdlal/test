import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostessService } from '../postes/postess.service';
import { Injectable } from '@angular/core';
Injectable()
export class authintercupterservers implements HttpInterceptor {
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    //  req is mmutaiple
    const modiferequiset = req.clone({
      headers: req.headers.append('token', 'beraer'),
    });
    console.log('repisut is hundling.....');
    return next.handle(modiferequiset);
  }
}
