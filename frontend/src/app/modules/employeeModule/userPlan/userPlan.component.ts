import { Component, OnInit, ViewChild, ElementRef,AfterViewInit } from "@angular/core";
import {OfferData} from "./model/model";
import {offerservice} from "./services/offer.service";
import { ArrayDataSource } from '@angular/cdk/collections';
//import { Http}  from '@angular/http';

@Component({
   
        selector:'userpage',
    templateUrl:'userPlan.component.html',
    styleUrls:['userPlan.component.css'],
   providers:[offerservice]
})
 
export class userPlanComponent implements OnInit{

   
   public isLinear=false;
   subscriptionplan:any;
   renewalplan:any;
   error_message_display:string;
   SubscriberData:OfferData[];
   RenewalData:OfferData[];
    constructor(private offer:offerservice){  
     this.SubscriberData= this.offer.getdata()[0].subscription;
    this.RenewalData= this.offer.getdata()[0].renewal;
     
    }
     ngOnInit(){

   }
  

   handleError(e:string):void{
    this.error_message_display = e;
   }

    

    }
    


 //constructor(private http:Http){
    // this.http.get('').map(response=>response.json()).subscribe(res => this.data =res);
 


