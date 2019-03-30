import {Injectable} from "@angular/core";
import { CategoryJsonretriever } from "../../../globalServices/categorylistjson";
import {category} from "../../../globalmodel/listitem/category";
import {of as ObservableOf, BehaviorSubject} from "rxjs";
@Injectable()

export class CategoryDatabase{

    dataChange:BehaviorSubject<category[]> = new BehaviorSubject<category[]>([]); 
  
    constructor(private categoryjson:CategoryJsonretriever){
        this.categoryjson.jsonretrieve().subscribe(data=>{
            this.dataChange.next(data);
            
        })
}
    

        }
