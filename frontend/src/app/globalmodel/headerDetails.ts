import { HttpHeaders } from '@angular/common/http';
export const httpOptions = {

   jsonHeaders:{
    headers : new HttpHeaders({
    'content-type' : 'application/json',
    'Access-Control-Allow-Origin': '*'
    
})}
     ,
     fileHeader:{
       headers: new HttpHeaders({
         'content-type':'multipart/form-data'
       })
}};