import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse, HttpHeaders } from "@angular/common/http"
import { url } from '../../../../globalmodel/url';
import {Observable,throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { httpOptions } from '../../../../globalmodel/headerDetails';
@Injectable()

export class PushChanges{
    url= url.localCategorylist;

    
    constructor(private http:HttpClient){

    }

    handleError(error:HttpErrorResponse){
        let errorMessage='';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = 'FrontEnd Error'
        } else {
          // server-side error
          errorMessage = 'BackEnd Error'
        }
     
        return throwError(errorMessage);
             };
    pushChanges(details:any):Observable<any>{
        
   return this.http.post<any>(this.url,{'categorylist':details},httpOptions.jsonHeaders).pipe(
   catchError(this.handleError));    
 };

}