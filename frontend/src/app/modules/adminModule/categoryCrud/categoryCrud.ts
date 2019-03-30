import {  Component, OnInit } from "@angular/core";
import {CategoryDatabase} from "../moduleServices/categoryDatabase";
import { FormGroup,FormControl, FormArray,Validators,FormGroupDirective,NgForm, FormBuilder } from '@angular/forms';
import { category } from '../../../globalmodel/listitem/category';
import { isArray } from 'util';
import {DataService} from '../moduleServices/dataService';
import { DialogDataService } from '../moduleServices/dialogDataService';
import { Router } from '@angular/router';

@Component({
    selector:'categoryCrud',
    templateUrl:'categoryCrud.html',
    styleUrls:['categoryCrud.css'],
    providers:[CategoryDatabase]
    
})

export class categoryCrud implements OnInit{
    private isDone=false;
    private checkkey=null;
  public showDataObject:any;
    public category:category[];
    public categoryForm:FormGroup;
    private newPushObject:category;
    constructor(private categoryDatabase:CategoryDatabase,private fb:FormBuilder,
        private dataSource:DataService,private dialogData:DialogDataService,private router:Router){
            console.log(localStorage.getItem('id_token')==null);
           if(localStorage.getItem('id_token')=='-1' || localStorage.getItem('id_token')== null ){
              this.router.navigate(['/admin/login'])
             }
        this.newPushObject= new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
    
    }


    
    ngOnInit(){
        this.categoryDatabase.dataChange.subscribe(
            data=>{
            
                this.category=data;
               
            }
        )

        }
     
   editorAdd(object){
    
  this.dataSource.updateDataSource(object);
}
}
