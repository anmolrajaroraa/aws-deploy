import { Component,OnInit,Input } from "@angular/core";
import { FormGroup,FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';
import { getErrorMessage } from "../../../globalServices/Validation";

@Component({
    selector:'logindetails',
    templateUrl:'login.component.html',
    styleUrls:['login.component.css'],
    
})


export class loginComponent implements OnInit{
   error_messages:any;
    loginDetails:FormGroup;
    constructor(private geterrormessage:getErrorMessage){
this.error_messages= this.geterrormessage.geterror();
    }
  ngOnInit(){ 
    this.loginDetails= new FormGroup({
 Name :new FormControl(null,[Validators.required,Validators.minLength(4),Validators.maxLength(40)]),
 password : new FormControl(null,[Validators.required,Validators.minLength(5),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$")])
    
})
}
onLogin(form:NgForm){

    console.log(form);

}

} 