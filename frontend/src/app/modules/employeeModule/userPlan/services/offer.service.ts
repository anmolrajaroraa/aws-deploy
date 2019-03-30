import { Injectable } from "@angular/core";

@Injectable()

export class offerservice{
    constructor(){

    }

    getdata():any{
        return [{
            subscription:[
            {title:'1 Year', charges: '847 + GST'},
            {title:'2 Year', charges: '847 + GST'},
        ],
          
         renewal:[
            {title:'1 Year', charges: '847 + GST'},
            {title:'2 Year', charges: '847 + GST'},
            
          ]}];
    }

} 