import { Injectable } from "@angular/core";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import { Observable,throwError } from 'rxjs';
import {url} from '../../../../globalmodel/url'
import { catchError, retry } from 'rxjs/operators';
import { ImageObj } from '../model/imageObject';
import { httpOptions } from 'src/app/globalmodel/headerDetails';

@Injectable()

export class ImageCrud{
 url= url.localImageuri;

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
    uploadFile(details:any):Observable<ImageObj>{
        
   return this.http.post<ImageObj>(this.url,details).pipe(
   catchError(this.handleError));    
 };
    }
     
