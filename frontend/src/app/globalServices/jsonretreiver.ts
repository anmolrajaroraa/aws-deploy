import { Injectable  } from "@angular/core";
import { HttpClient,HttpBackend } from '@angular/common/http';
import { statedetails } from '../globalmodel/statedetails';


@Injectable()

export class Jsonretriever{
   private url ="https://raw.githubusercontent.com/MilanCoder/indian-states/master/indianstates.json";
   constructor(private http:HttpClient,private httpbackend:HttpBackend){
    this.http= new HttpClient(httpbackend);
}
jsonretrieve(){
     return this.http.get<statedetails[]>(this.url);
    }
}