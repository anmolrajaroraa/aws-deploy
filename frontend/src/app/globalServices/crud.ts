import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable,throwError } from 'rxjs';
import { httpOptions } from "../globalmodel/headerDetails";
import { catchError, retry } from 'rxjs/operators';
import {url} from '../globalmodel/url';

@Injectable()

export class crudOperation{
  url= url.localRegisteruri;
    constructor(private http:HttpClient){  }
 handleError(error:HttpErrorResponse){
  if(error.error instanceof ErrorEvent){
    console.error('An error occurred:', error.error.message);
    } else {
  // The backend returned an unsuccessful response code.
  // The response body may contain clues as to what went wrong,
  console.error(
    `Backend returned code ${error.status}, ` +
    `body was: ${error.error}`);
     }
// return an observable with a user-facing error message
      return throwError(
  'Something bad happened; please try again later.');
     };

   login(){
       
   }

    register(form:NgForm):Observable<{}>{
    
      return this.http.post(this.url,form,httpOptions.jsonHeaders).pipe(
      catchError(this.handleError));    
    }


}