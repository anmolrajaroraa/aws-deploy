import { Component, OnInit, OnChanges } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material'
import { AddDialogComponent } from '../Dialogs/Add/add-dialog.component';
import { EditDialogComponent } from '../Dialogs/Edit/edit-dialog.component';
import { DeleteDialogComponent } from '../Dialogs/Delete/delete-dialog.component';
import {DataService} from '../moduleServices/dataService'
import { category } from 'src/app/globalmodel/listitem/category';
import { DialogDataService } from '../moduleServices/dialogDataService';
import { CategoryDatabase } from '../moduleServices/categoryDatabase';
import {Subcategorylist} from 'src/app/globalmodel/listitem/categorylist';
import {Productlist} from 'src/app/globalmodel/listitem/productList';
import {SubProduct} from 'src/app/globalmodel/listitem/subProduct';
import {Router} from "@angular/router";
import{Data} from '../moduleServices/dataStorage';
import { PushChanges } from './services/pushobject';
import {SuccessComponent} from './../../sharedModule/successSnackbar';
@Component({
    selector:'tablehere',
    templateUrl:'table.component.html',
    styleUrls:['table.component.css']
})

export class TableComponent implements OnInit{
    columns = [];
    private stackArray=[];
    private isNull=false;
    private parentCheckNode;
    private isCompleted=false;
    displayedColumns=[];
  private checkArray=[];
    private mainDataSource:category[];
private newPushObject:any;
    private dataSource:any;
   private noMore=false;
       

    constructor(private pushobject:PushChanges ,private dataStorage:Data,private router: Router,private snackBar:MatSnackBar,
        public dialog: MatDialog,private dataObj:DataService,
        private dialogData:DialogDataService,private categoryDatabase:CategoryDatabase){
this.newPushObject= new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);

    }

openSnackBar() {
    this.snackBar.openFromComponent(SuccessComponent,{
      duration: 1500,
    });
  }
    
    pushChanges(){
        console.log(this.mainDataSource);
this.pushobject.pushChanges(this.mainDataSource).subscribe(data=>{
this.openSnackBar();
}
,err=>{
    alert('Error Ocurred');
}
)
    }

    deletethisObject(mainarray,object,index){
        mainarray.splice(index,1); 
        
    }
   editDataObject(mainarray,result,index){
      
        mainarray.splice(index,1,result);           
         
      }
      pushObject(array,obj){
       array.push(obj);
      }
    

    trimPushObject(pushObj){
        console.log(this.isNull);
        if(this.isNull==false){
            
            console.log('i m in',pushObj);
            for(let key in pushObj){
              
                if(pushObj[key]!=null){
                    console.log(typeof(pushObj[key]))
                    if(typeof(pushObj[key])!='object'){
                        console.log(pushObj)
                    this.newPushObject=pushObj;
               this.isNull=true;  
               console.log(this.newPushObject);
               return;
                    }  
            }
             if(pushObj[key]!=null && typeof(pushObj[key])=='object'){
               
                this.trimPushObject(pushObj[key][0]);
            }
        }
}else{
this.isNull=false;
    return;
}  
    }

   
    
    recursiveFinder(mainarray,checkData,functionCall,pushData,index){
        if(!this.isCompleted){
        mainarray.forEach(mainobj=>{
            
            if(Object.keys(mainobj)[0]==Object.keys(checkData[0])[0]){
               
         if(Object.values(mainobj)[0]==Object.values(checkData[0])[0]){
            
             console.log(functionCall);
                  functionCall(mainarray,pushData,index);
                  this.isCompleted=true;

         }
        }for(let mainkey in mainobj){
            if(typeof(mainobj[mainkey])=='object' && Array.isArray(mainobj[mainkey])){
             
                this.recursiveFinder(mainobj[mainkey],checkData,functionCall,pushData,index);
            
              } 
           }   
        
         }
         )}
         else{
            
             return;
         }
       
    }
    
    setDataSource(nodeCheck,functionCall,data,index){
         this.isCompleted=false;
        this.recursiveFinder(this.mainDataSource,nodeCheck,functionCall,data,index);
        
         this.categoryDatabase.dataChange.next(this.mainDataSource);
    
    }



    iterativeDialogMaker(data){
        if(Object.keys(data)){
        if(Object.keys(data)[0]!='uri'){
        const dialogRef=this.dialog.open(AddDialogComponent,{   //creating the reference
            height:'300px',
            width:'400px',
            data:data,    //sending data to the dialog component
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if(result!=null){
             let newData=null;
                newData=result[0];
            console.log(newData);
                if(newData!=null && Array.isArray(newData)){
                this.iterativeDialogMaker(newData[0]);
                }
               
            }
          });
        }
    }}
   

    ngOnInit(){
        this.dataObj.dataSource.subscribe(data=>{
           data.forEach(element => {
               
           });
            this.dataSource=data;
            if(this.mainDataSource==null || this.mainDataSource.length==0){
            this.mainDataSource = this.dataSource.slice();  
             } this.makeColoumns();        
        })
        
        this.dialogData.dialogdataSource.subscribe(data=>{
           
            switch(Object.keys(data)[0]) {
                case 'category':
                if(this.newPushObject!=null){

                }
                else{
                this.newPushObject= new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
                }
                    for(let key in data){
                       this.newPushObject.categoryId= data[key].addarray[0];
                    this.newPushObject.categoryName = data[key].addarray[1];
                    }
                  break;
                case 'subcategory':
               
                if(this.newPushObject!=null && this.newPushObject.subcategory!=null){

               }else{
                    this.newPushObject = new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
                   }
                        for(let key in data){
                    
                            this.newPushObject.subcategory[0].subcategoryId=data[key].addarray[0];
                            this.newPushObject.subcategory[0].subcategoryName= data[key].addarray[1];
                            }
                
                  break;
                  case 'products':
                 
                  if(this.newPushObject!=null && this.newPushObject.subcategory!=null &&  this.newPushObject.subcategory[0].products!=null ){
                   
                  }else{
                        this.newPushObject = new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
                  }
                            for(let key in data){
                        
                                this.newPushObject.subcategory[0].products[0].productId= data[key].addarray[0];
                                this.newPushObject.subcategory[0].products[0].productName= data[key].addarray[1];
                            
                    }
                
                 
                  // code block
                  break;
                case 'subProducts':
               
                if(this.newPushObject.subcategory!=null && this.newPushObject.subcategory[0].products!=null &&this.newPushObject.subcategory[0].products[0].subProducts!=null){
                 
                   
                }else{
                   
                    this.newPushObject = new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
                      
                            
                    }
                    for(let key in data){
                        
                        this.newPushObject.subcategory[0].products[0].subProducts[0].subproductId= data[key].addarray[0];
                        this.newPushObject.subcategory[0].products[0].subProducts[0].subproductName= data[key].addarray[1];
             
                       
                        
                    }
                    console.log(this.newPushObject);
                    this.isNull=false;
                    this.trimPushObject(this.newPushObject);
                    this.setDataSource(this.parentCheckNode,this.pushObject,this.newPushObject,0);
                    this.newPushObject = new category(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null);
                  break;
                default: 
                  // code block
              }

             
        })
    }

    objCheck(value){
        if(typeof(value)=="object"){
            return false;
        }
        else{
            return true;
        }
    }



    addNew(data){
    this.parentCheckNode=data;
    this.iterativeDialogMaker(data[0]);
    }
      
      
  
    
    
    startEdit(row:any,index,dataSource){
       
        const dialogRef=this.dialog.open(EditDialogComponent,{
            height:'300px',
            width:'400px',
            data:row,
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result!=null){

                this.setDataSource(dataSource,this.editDataObject,result,index);
              
            }            
          });   
    }

    deleteItem(row:any,index:any,dataSource){
        const dialogRef=this.dialog.open(DeleteDialogComponent,{
            height:'300px',
            width:'400px',
            data:row,
        });
        dialogRef.afterClosed().subscribe(result => {
            if(result!=null){
                console.log(index);
                var clone = this.dataSource.slice();
                clone.splice(index,1);
                this.dataSource=clone;
                this.setDataSource(dataSource,this.deletethisObject,result,index);
                
                
            }
          });
    }

    makeColoumns(){   
        this.columns.splice(0,this.columns.length);      //used to draw columns of table
        var object=this.dataSource[0];
        console.log(object)
            for(let key in object){
                if(this.objCheck(object[key])){
                    console.log(key);
                    this.columns.push(key);
                }
                if(key=="imageUrls"){
                    this.columns.push("Other Data");
                }
            }
            this.displayedColumns=this.columns.concat(['actions']);
        
    }

parentStackTrace(obj){
let noMore=false;
let categoryid;
let subcategoryid;
let productid;

for(let category of this.mainDataSource){ 
    if(!noMore){
        categoryid=category.categoryId;
     for(let subcategory of category.subcategory){
         if(!noMore){
             subcategoryid = subcategory.subcategoryId;
         for(let products of subcategory.products){
             if(!noMore){
             productid=products.productId;
             for( let subProduct of products.subProducts){
                 if(!noMore){
                 if(subProduct.subproductId==obj.subproductId){
                 this.stackArray.push(categoryid,subcategoryid,productid,subProduct.subproductId);
                 noMore=true;
                 return ;
                }
            
         }
   
 }
}}}
 }}
}
}
    redirectToImageUpload(data,initialData){
        this.stackArray=[];
        console.log(initialData);
       this.parentStackTrace(data);
       this.dataStorage.storage={
           'stackTrace':this.stackArray,
           'initialImage':initialData,
           'otherInfo':data
       }
       this.dataSource=null;
    this.router.navigate(["admin/productUpload"]);
}
      
       
    }

