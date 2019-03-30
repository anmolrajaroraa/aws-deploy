import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import { FormArray, FormControl, Validators, NgForm, FormGroup} from '@angular/forms';
import { DialogDataService } from '../../moduleServices/dialogDataService';
import { getErrorMessage } from 'src/app/globalServices/Validation';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Component({
    selector:'add-dialog',
    templateUrl:'./add-dialog.component.html',
    styleUrls:['./add-dialog.component.css']
})

export class AddDialogComponent implements OnInit{
    private demo:FormGroup;
    private sessionkey=null;
  
    private keyArray=[];
    private resultArray=[]; 
    private error_messages;
    //private addarray:FormArray;
    constructor(@Inject(MAT_DIALOG_DATA) public object: any,
                        public dialogRef: MatDialogRef<AddDialogComponent>,private dialogService:DialogDataService,private error_message:getErrorMessage){
                            this.error_messages=this.error_message.geterror();
                        }

    checkTypeOfCategory(checkobject){


       let checkkey=Object.keys(checkobject)[0];
       switch(checkkey) {
        case 'categoryId':
              this.sessionkey = 'category';
          break;
        case 'subcategoryId':
           this.sessionkey= "subcategory";
          break;
          case 'productId':
          this.sessionkey='products'
          // code block
          break;
        case 'subproductId':
          this.sessionkey='subProducts'
          break;
         
        default: this.sessionkey=null;
          // code block
      }
    }

    ngOnInit(){
       
        this.demo=new FormGroup({            //form group is required bcz form doesnt understand formarray property
            addarray:new FormArray([            
            ])
        })

        for(let key in this.object){
            if(this.objCheck(this.object[key])){
                this.keyArray.push(key);
                (<FormArray>this.demo.get('addarray')).push(new FormControl('',Validators.required));
            }
            else{
                this.resultArray.push(this.object[key]);
            }
        }
    }
    Cancel(){
        this.dialogRef.close(null);
    }

    Add(form:NgForm){
        this.checkTypeOfCategory(this.object);
      
             if(this.sessionkey!=null){
              let obj ={
                  [this.sessionkey]:form
              }
          
              this.dialogService.updateDataSource(obj);
            }
        
        this.dialogRef.close(this.resultArray);

        

   // sessionStorage.setItem('')
        //add form data to session storage to form object
    }

    objCheck(value){
        if(typeof(value)=="object"){
            return false;
        }
        else{
            return true;
        }
    }
}
