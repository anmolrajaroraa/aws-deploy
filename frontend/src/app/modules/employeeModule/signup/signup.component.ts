import { Component,OnInit,OnChanges,Input, Output,EventEmitter } from "@angular/core";
import { FormGroup,FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { Jsonretriever } from '../../../globalServices/jsonretreiver';
import { statedetails } from '../../../globalmodel/statedetails';
import { getErrorMessage } from '../../../globalServices/Validation';
import { crudOperation } from 'src/app/globalServices/crud';
import { Router,NavigationExtras } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { dateValidation } from '../signup/dateValidation';
import { SessionStorageService } from "ngx-webstorage";
import { imageUpload } from './services/imageUpload';
import {DateAdapter} from '@angular/material';
import{DateFormat}from '../../../globalmodel/dateFormat';
import { documentArray } from "./model/documentsValidation";
import{Compulsorydocuments} from "./model/constants";
import { uploadProgress } from "./model/uploadProgress";
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({

    selector:'userDetails',
    templateUrl:'signup.component.html',
   styleUrls:['signup.component.css'],
   providers:[{provide: DateAdapter, useClass: DateFormat}]
})


export class signupComponent implements OnInit{
 private islinear=false;
    private showProgress:string="false";
 private keepGoing
 private count;
 private focused:boolean=false;
 private filesurl;
 private invocationloop:number;
 private isReady:Boolean;
 private uniqueid:string;
 private decide:boolean=false;
 private isSubmit:boolean=false;
private matchedUploadEntry:number;
private error_messages:any;
private userform:FormGroup;
private statelist:statedetails[];
private minDate = new Date(1900, 0, 1);
private maxDate = new Date(new Date().getFullYear()-18,new Date().getMonth(),new Date().getDate());
public uploadProgress;
private formdata = new FormData();
@Input('subscription') public plantype;
@Output() errorMessage:EventEmitter<string> = new EventEmitter<string>();

constructor(
    
    private dateAdapter:DateAdapter<Date>,
    private jsonretriever:Jsonretriever,
    private error_message:getErrorMessage,
    private crudoperation:crudOperation,
     private router:Router, 
    private sessionStorage:SessionStorageService,
    private imageUpload:imageUpload) 
     {   
         dateAdapter.setLocale('en-in');
         this.error_messages=this.error_message.geterror();

        }
loadstates():void{ 
      this.jsonretriever.jsonretrieve().subscribe(data => this.statelist = data);
    }

ngOnInit(){
   this.uploadProgress=uploadProgress;
    this.loadstates();
  
  this.userform=new FormGroup({
   name:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/)]),
   password: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40),
    Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)]),
   date_of_birth: new FormControl(null,[dateValidation]),
   mobile_no:new FormControl(null,[Validators.required,
    Validators.pattern(/^([+][9][1]|[9][1]|[0]){0,1}([7-9]{1})([0-9]{9})$/)]),
   email: new FormControl(null,[Validators.required,Validators.email]),
   typeEmployee: new FormControl(null,[Validators.required]),
   gender: new FormControl(null,[Validators.required]),
   qualification: new FormControl(null,[Validators.required]),  
   referralCode: new FormControl(null),
   nominee: new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/)]),
   nomineeRel:new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[a-zA-Z][a-zA-Z ]*$/)]),
   documents: new FormGroup({
        GSTNumber: new FormControl(null,
            Validators.pattern(/^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$/)),
        adhno: new FormControl(null,[Validators.pattern(/^\d{4}\s\d{4}\s\d{4}$/)]),
        bankacno: new FormControl(null,[Validators.required,Validators.pattern(/[0-9]{9,18}/)]),
        pancardno : new FormControl(null,[Validators.pattern(/[A-Za-z]{5}\d{4}[A-Za-z]{1}/)]),
        nomineeAdhno: new FormControl(null,[Validators.required,Validators.pattern(/^\d{4}\s\d{4}\s\d{4}$/)])
         }),
   address: new FormGroup({
   fulladdress:new FormControl(null,Validators.required),
    street : new FormControl(null,[Validators.required]),
    city: new FormControl(null,[Validators.required]),
    state: new FormControl(null,[Validators.required]),
    pin_code : new FormControl(null,[Validators.required,Validators.pattern(/^[1-9][0-9]{5}$/)])
      
       })

         });}

  onfocus(){
      this.focused=true;
  }

  outfocus(){
      this.focused=false;
  }

   isUploadTrue(){
     this.invocationloop=0;  
    let documentsArray=documentArray.validateDocuments;
    let filledindex:number=0;
     
  
     this.formdata.forEach(element=>{
    this.invocationloop++;
    })
    
      
documentsArray.forEach(element=> {
    if(this.userform.get(element)!=null){
      
    if(this.userform.get(element).value!=null && this.userform.get(element).value!='' && this.userform.get(element).valid )
       filledindex++;
       
    }
});
      if(this.invocationloop==filledindex+Compulsorydocuments.Max_Compulsory_file && this.invocationloop>Compulsorydocuments.Max_Compulsory_file)
     {return true;
    }
    else
     return false;
         }


   OnChange(inputParam:HTMLInputElement){
  
    this.uploadProgress[inputParam.getAttribute("name")]=true;
    this.formdata.set("mobile_no",this.userform.get("mobile_no").value);
    this.formdata.set(inputParam.getAttribute("name"),inputParam.files[0]);
}

    display():void{
    this.decide=true;
     }

    onregister(form:NgForm):void{
   this.crudoperation.register(form).subscribe(data=>{
        if(data){
           
           this.sessionStorage.store("userData",form);
      
        }}
      ,
      err=>{
          alert("Registeration error!!");
      })}
    
    
   isSubmitTrue(){
      
    if(this.invocationloop==this.matchedUploadEntry){
        this.isSubmit=true;}
        else{
            this.isSubmit=false;
           }}

checkConditionNull(dataElement){
    if(this.userform.get(dataElement).value!=null && 
                          this.userform.get(dataElement).value!='' && 
                          this.userform.get(dataElement).valid){
                              return true;
                          }else{
                              return false
                          }
}
checkImageUrls(data,documentsArray){
    this.keepGoing =true;
    this.count=1;
    console.log("i m running");
    console.log(data.imageUrls);
    data.imageUrls.forEach(obj => {
        for(let superkey in obj){
        documentsArray.imageUrls.forEach(element=> {
              for(let key in element){
                if(obj[superkey]!=null) {
                    if(key==superkey){
                      this.uploadProgress[superkey]=false;
                      console.log(superkey,key);
                      this.matchedUploadEntry++;
                      if(superkey!="policeVerification" && superkey!="cancelCheque"){
                      if(this.checkConditionNull(element[key]))
                      {  
                           this.userform.get(element[key]).valueChanges.subscribe(val=>{
                              this.isSubmit=false;
                              this.showProgress="false";
                              this.uploadProgress[superkey]=true;
                              this.break(this.keepGoing,this.count);
                             }
                            )
                        }
                    }}
                }
            }
        }
        )
    }
}
)
}
 

 checkmobileno(data,documentsArray){
    this.keepGoing =true;
    this.count=1;
    console.log(data.mobile_no);
    if(data.mobile_no==this.userform.get('mobile_no').value){
       if(this.checkConditionNull(documentsArray.mobile_no))
                     {   this.matchedUploadEntry++;
                          this.userform.get(documentsArray.mobile_no).valueChanges.subscribe(val=>{
                              this.isSubmit=false;
                             this.break(this.keepGoing,this.count);
                             })}}}
 


   uploadPhoto(){
       this.showProgress="true";
    let documentsArray=documentArray.documentsArray;
   this.imageUpload.uploadFile(this.formdata).subscribe(data=>{
  this.matchedUploadEntry=0;
  console.log("ill run")
  if(data.id!=null && data.imageUrls!=null){
  this.uniqueid=data.id;
  this.filesurl=data.imageUrls;
    this.checkImageUrls(data,documentsArray);
    this.checkmobileno(data,documentsArray);
     this.isSubmitTrue();
                        }
                    else{
                        alert("Uploading Error ")
                    }},
     err=>{
        alert('Something wrong happened, please try again later');
     })}


     break(keepGoing,count){
        if(keepGoing) {
            if(count == 1){
                alert('For New Data Entry upload file again');
              this.keepGoing = false;
            }
          }
     }

    
   

onSubmit(form:NgForm):void{
    
     form['plan']=this.plantype;
     form['uid']=this.uniqueid;
     form['filesurl']= this.filesurl;
     
    if(!form['plan']){
        this.errorMessage.emit(this.error_messages.planChoosen[0].message)
       }
    
    else{
        this.onregister(form);  
        }    
    }




}