import { Component, OnInit, ElementRef } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { ImageDatabase } from './services/imageDatabase';
import { ImageObj } from './model/imageObject';
import {MatSnackBar} from '@angular/material';
import {SuccessComponent} from '../../sharedModule/successSnackbar';
import { Data } from '../moduleServices/dataStorage';
import { Router } from '@angular/router';
import { excelUpload } from './services/excelUpload';

@Component({
  selector: 'productUpload',
  templateUrl: './productUpload.component.html',
  styleUrls: ['./productUpload.component.css'],
  providers:[ImageDatabase]
})
export class productUploadComponent implements OnInit {
private activeSrc:string;
private isSelected:boolean=false;
private formdata:FormData;
private parentTrace=[];
private index:number=0;
private categoryId:string;
private subcategoryId:string;
private productId:string;
private subproductId:string;
private subproductFullData;
private form = new FormData();
private imageList:ImageObj[]=[];
private activeImageObj:ImageObj = new ImageObj();
  constructor(private excelUpload:excelUpload ,private imageDatabase:ImageDatabase,private snackBar: MatSnackBar,
    private dataStorage:Data,private router:Router ) {
   if(localStorage.getItem('id_token')=='-1' && localStorage.getItem('id_token')== null || typeof(dataStorage.storage)=='undefined'){
    this.router.navigate(['/admin/login'])
    }
    this.parentTrace = dataStorage.storage.stackTrace;
    
    this.subproductFullData=dataStorage.storage.otherInfo;
    console.log(this.parentTrace);
    if(dataStorage.storage.initialImage){
         for(let obj of dataStorage.storage.initialImage){
         this.index++;
         console.log(this.index);
          obj.index = this.index;
          this.imageList.push(obj);

         }
         this.selectImage(this.imageList[0]);
        }
         
        
        
       
   }

  ngOnInit() {
    this.formdata = new FormData();
    this.formdata.set('idToken',localStorage.getItem('id_token'))
    this.categoryId=this.parentTrace[0];
    this.subcategoryId=this.parentTrace[1];
    this.productId=this.parentTrace[2];
    this.subproductId=this.parentTrace[3];
    this.activeSrc="";
    this.form.set('idToken',localStorage.getItem('id_token'));
    this.form.set('categoryId',this.categoryId);
this.form.set('subcategoryId',this.subcategoryId);
this.form.set('productId',this.productId);
this.form.set('subproductId',this.subproductId);
this.imageDatabase.getimageObj().subscribe(data=>{
  if(data!=null){  
   this.openSnackBar();
   this.index++;
   data.index = this.index;
  this.imageList.push(data);
  
  }
})
  
}
openSnackBar() {
  this.snackBar.openFromComponent(SuccessComponent,{
    duration: 1500,
  });
}

deleteFromBackend(element,index){

}

selectImage(imageObj:ImageObj){
  this.imageList.forEach(obj=>{
   
    if(obj!=null){
    obj.selected=false;
   } })
  if(imageObj){
  imageObj.selected=true;
 console.log(imageObj)
this.activeImageObj.index=imageObj.index;
this.activeImageObj.uri=imageObj.uri;
  }
}

  uploadImage(form:FormData):void{
    this.imageDatabase.uploadFile(form);  
}

removeThisImage(index){
let i;
for( i=0;i<this.imageList.length;i++){
  let element = this.imageList[i]; 
    if(element.index==index){
      this.deleteFromBackend(element,index);
      
this.imageList.splice(i,1);

if(this.imageList[i+1]!=null){
this.activeImageObj = this.imageList[i+1];
}
else if(this.imageList[i-1]!=null){
  this.activeImageObj = this.imageList[i-1];

}
else{
  this.activeImageObj.uri =null;
 this.activeImageObj.index=null;

}
  }
};



}

imageUpload(inputFile:HTMLInputElement):void{
  
  this.form.set('index',(this.index +1).toString())
  
  if(inputFile.files.length!=0){
this.form.set('myImage',inputFile.files[0]);
this.uploadImage(this.form);
}

}

OnChange(inputParam:HTMLInputElement){
  if(inputParam.files.length!=0){
  this.formdata.set(inputParam.getAttribute("name"),inputParam.files[0]);
 console.log(this.formdata.get(inputParam.getAttribute("name")))
  this.isSelected=true;
}
}


uploadExcel(){
  this.excelUpload.exceluploader(this.formdata).subscribe((res)=>{
      if(res){
        this.openSnackBar();
      }},
  
  err=>{
      alert(err);
  
  })}

} 

