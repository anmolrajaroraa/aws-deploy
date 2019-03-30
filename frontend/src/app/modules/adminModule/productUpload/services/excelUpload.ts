import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable,throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import {url} from "../../../../globalmodel/url";

@Injectable()

export class excelUpload{
 url= url.localExceluri;
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
    exceluploader(form:FormData){
       return this.http.post<any>(this.url,form).pipe(
         catchError(this.handleError));    
       };

    }
