import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Data } from '../moduleServices/dataStorage';
import { priceAndAmount } from 'src/app/globalmodel/listitem/priceAndAmount';
import { subproductInfo } from 'src/app/globalmodel/listitem/subproductInfo';
import { UploadService } from './services/uploadform';

@Component({
  selector: 'app-subproducts-data',
  templateUrl: './subproducts-data.component.html',
  styleUrls: ['./subproducts-data.component.css']
})
export class SubproductsDataComponent implements OnInit {
public dataForm:FormGroup;
private arr=[];
private info:subproductInfo;
  constructor(private fb:FormBuilder,private data:Data,private uploadform:UploadService) { 
   this.info = data.storage.otherInfo.info;
   console.log(this.info);
   this.initialPriceAndAmount();
  }

initialPriceAndAmount(){
  
  for(var obj of this.info.priceAndAmount)
 
  this.arr.push(this.createPriceAmount(obj));

}

deleteThisIndex(index){
this.arr.splice(index,1);
this.createForm();
}

addOptions(){
  
  this.arr.push(this.createPriceAmount('-1'));
  console.log(this.arr)
  this.createForm();
}

createPriceAmount(obj){
  if(obj!='-1'){
return this.fb.group({
  amount:[obj.amount,[Validators.required]], 
  suffix:[obj.suffix,[Validators.required]],
   price:[obj.price,[Validators.required]], 
   discount:[obj.discount,[Validators.required]]
})}
else{
  return this.fb.group({
    amount:['',[Validators.required]], 
    suffix:['',[Validators.required]],
     price:['',[Validators.required]], 
     discount:['',[Validators.required]]
  })
}
}

createForm(){
  this.dataForm=this.fb.group({
    description:[this.info.description,[Validators.required]],
    benefitsAndUses:[this.info.benefitsAndUses,[Validators.required]],
    priceAndAmount:this.fb.array(this.arr)
    
  });
}

  ngOnInit() {
this.createForm();
   
}

onSubmit(form:NgForm){
  
  form['stackTrace']=this.data.storage.stackTrace;
  console.log(form)
  this.uploadform.uploadForm(form).subscribe(data=>{
    if(data){
      alert('success');
    }

  },err=>{
    alert(err);
  })
}

}
  
