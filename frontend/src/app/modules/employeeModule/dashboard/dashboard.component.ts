import {Component, OnInit} from '@angular/core'
import {ActivatedRoute,ParamMap}  from '@angular/router'
import { UserDetails } from 'src/app/globalmodel/UserDetails';
import {  SessionStorageService} from "ngx-webstorage";
@Component({
    selector:'dashboard',
   templateUrl:"dashboard.component.html",
   styleUrls:["dashboard.component.css"]
})

export class dashboardComponent implements OnInit{
    name:string;
    userDetails:UserDetails;

    constructor(private sessionStorage:SessionStorageService){

}

ngOnInit(){
    
this.userDetails=this.sessionStorage.retrieve('userData');
console.log(this.userDetails);
}
}