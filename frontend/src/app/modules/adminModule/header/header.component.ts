import { Component,OnInit } from "@angular/core";
import { FormGroup,FormControl, Validators,FormGroupDirective,NgForm } from '@angular/forms';

import{ statedetails} from '../../../globalmodel/statedetails';
import {Observable} from 'rxjs';

import { Router } from '@angular/router';
@Component({
    selector:'adminheader',  
    templateUrl:'header.component.html',
    styleUrls:["header.component.css"]
})

export class adminheaderComponent implements OnInit{
    display:boolean;
    statelist:statedetails[];
    searchQuery:FormGroup;
    address:FormGroup;
    tokenid:string='-1';
   
 constructor(private route:Router){

 }


 signOut(){
     localStorage.setItem('id_token','-1');
     this.tokenid='-1';
     this.route.navigate(['/admin/login'])
 }

 l

ngOnInit(){
    if(localStorage.getItem('id_token')!='-1' && localStorage.getItem('id_token')!= null){
        this.tokenid=localStorage.getItem('id_token');
        this.route.navigate(['/admin/categorycrud'])
    }
    this.display=false;
  
            }
  
  

displayblock(){
    if(this.display==false)
    this.display=true;
    else
    this.display=false;
}
}