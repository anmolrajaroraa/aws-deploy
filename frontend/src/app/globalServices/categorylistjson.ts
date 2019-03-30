import { Injectable  } from "@angular/core";
import { HttpClient,HttpBackend } from '@angular/common/http';
import {category} from "../globalmodel/listitem/category";
import { httpOptions } from '../globalmodel/headerDetails';


@Injectable()

export class CategoryJsonretriever{
   private url ='https://raw.githubusercontent.com/MilanCoder/CategoryList/master/categoryList';
    constructor(private http:HttpClient,private httpbackend:HttpBackend){
        this.http= new HttpClient(httpbackend);
    }

    jsonretrieve(){
        
     return this.http.get<category[]>(this.url);
    }
}