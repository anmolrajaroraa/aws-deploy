import { Injectable } from "@angular/core";
import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from "@angular/common/http"
import  {Observable} from 'rxjs';
@Injectable()
export  class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
      const idToken = localStorage.getItem('id_token');
      console.log(idToken);
        if(idToken){
const clonereq = req.clone({
    headers:req.headers.set("Authorization","Bearer "+idToken)

})


 return next.handle(clonereq);

        }else{
            
          return  next.handle(req);
        }

    }
}