import { Component, OnInit } from '@angular/core';
import { CategoryJsonretriever } from "../../../globalServices/categorylistjson";
  import {category} from "../../../globalmodel/listitem/category";
  import {of as ObservableOf, BehaviorSubject} from "rxjs";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private categorylist:category[];
 
    
      constructor(private categoryjson:CategoryJsonretriever){
          this.categoryjson.jsonretrieve().subscribe(data=>{
             this.categorylist=data;
              
          })
  }
  ngOnInit() {
  }

}
