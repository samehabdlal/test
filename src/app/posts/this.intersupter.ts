import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class logingintercpter implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('Out going requset .......');
       
        // const httclient=req.clone({
        //     headers:req.headers.append('ss','ss')
        // })
        return next.handle(req).pipe(
            tap(event=>{
             if(event.type===HttpEventType.Response){
                  console.log('incaming response .......');
                  console.log(event.body);
                  
             }
            })
        )
    }

}