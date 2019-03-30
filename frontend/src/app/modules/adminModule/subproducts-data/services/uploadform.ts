import {Injectable} from '@angular/core';
import {url} from '../../../../globalmodel/url';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { httpOptions } from "../../../../globalmodel/headerDetails";
import { catchError, retry } from 'rxjs/operators';
import { NgForm } from '@angular/forms';


@Injectable()

export class UploadService{
    url= url.localEditProducts;

    constructor(private http:HttpClient){

    }

    handleError(error:HttpErrorResponse){
        let err='';
          if(error.error instanceof ErrorEvent){
           err='FrontEnd Error'
            } else {
         err = 'BackendError'
             }
      
              return throwError(
          err);
             };
    uploadForm(details:any):Observable<any>{
        
   return this.http.post<any>(this.url,details,httpOptions.jsonHeaders).pipe(
   catchError(this.handleError));    
 };

 

 register(form:NgForm):Observable<{}>{
 
   return this.http.post(this.url,form,httpOptions.jsonHeaders).pipe(
   catchError(this.handleError));    
 }
}