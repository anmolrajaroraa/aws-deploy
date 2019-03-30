import { Component,OnInit,Input } from "@angular/core";
import { FormGroup,FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { getErrorMessage } from "../../../globalServices/Validation";
import { Router, RouterEvent } from '@angular/router';
import { Dologin } from './service/dologin';

@Component({
    selector:'adminlogin',
    templateUrl:'login.component.html',
    styleUrls:['login.component.css'],
    
})


export class adminloginComponent implements OnInit{
   error_messages:any;
    loginDetails:FormGroup;
    constructor(private geterrormessage:getErrorMessage,private router:Router,private dologin:Dologin){
this.error_messages= this.geterrormessage.geterror();
    }
  ngOnInit(){ 
    this.loginDetails= new FormGroup({
        id: new FormControl(null,[Validators.required]),
 name :new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40)]),
 password : new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern(/^(?=.*[0-9])/)])
    
})
}
onLogin(form:NgForm){

this.dologin.login(form).subscribe(data=>{
    if(data){
        console.log(data.token);
    localStorage.setItem('id_token',data.token);
    this.router.navigate(['admin/categorycrud']);
}
    
},err=>{
    alert(err);
})
    


}

} 