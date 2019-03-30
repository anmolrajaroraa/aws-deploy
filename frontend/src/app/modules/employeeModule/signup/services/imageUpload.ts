import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import {url} from '../../../../globalmodel/url'
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class imageUpload{
 url= url.localImageuri;
    constructor(private http:HttpClient){

    }

    handleError(error:HttpErrorResponse){
      let errorMessage='';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
           };
    uploadFile(details:any):Observable<any>{
        
   return this.http.post<any>(this.url,details).pipe(retry(2),
   catchError(this.handleError));    
 };
    }
     
