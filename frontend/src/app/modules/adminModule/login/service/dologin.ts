import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { url } from '../../../../globalmodel/url';
import {Observable,throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { httpOptions } from 'src/app/globalmodel/headerDetails';

@Injectable()

export class Dologin{
    url= url.locallogin;

     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          
        })
      };
    constructor(private http:HttpClient){

    }

    handleError(error:HttpErrorResponse){
        let errorMessage='';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = 'Front End Error'
        } else {
          // server-side error
          errorMessage = 'BackEnd Error'
        }
 
        return throwError(errorMessage);
             };
    login(details:any):Observable<any>{
        
   return this.http.post<any>(this.url,details,this.httpOptions).pipe(
   catchError(this.handleError));    
 };

}