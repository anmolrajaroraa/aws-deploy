import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class getErrorMessage{
    
    geterror(){
    return {
        'name': [
          { type: 'required', message: 'Name is required' },
          { type: 'minlength', message: 'Name must be at least 5 characters' },
          { type: 'maxlength', message: 'Name must be less than 25 characters' },
           {type:'pattern', message:'Only Alphabhets are allowed'}
        ],
        'emailid': [
          { type: 'required', message: 'Email is required' },
          { type: 'email', message: 'Enter a valid email' }
        ],
        'pwd': [
          { type: 'required', message: 'Password is required' },
          { type: 'minlength', message: 'Password must be at least 5 characters' },
          { type: 'maxlength', message: 'Password cannot be more than 25 characters' },
         { type :'pattern', message: 'Must contain one with Number'  }
        ],

        'mobileNo': [
          { type: 'required', message: 'Mobile No is required' },
          { type: 'pattern', message: 'Enter a valid mobile no' }
        ],
        'confirm_password': [
          { type: 'required', message: 'Confirm password is required' },
          { type: 'areEqual', message: 'Password mismatch' }
        ],
        'password': [
          { type: 'required', message: 'Password is required' },
          { type: 'minlength', message: 'Password must be at least 5 characters long' },
          { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
        ],
        'terms': [
          { type: 'pattern', message: 'You must accept terms and conditions' }
        ],

        'pincode':[
          { type : 'required', message : 'Pin Code is mandatory' },
          { type :'pattern' , message : 'Pattern MisMatch' }
        ],

        'adharNo':[
          { type :'required', message : 'Adhar Card No is mandatory' },
          { type :'pattern' , message : 'Pattern MisMatch' }
        ]
        ,
        'gstNumber':[
          { type :'pattern' , message : 'Pattern MisMatch' }
        ]
        ,
        'panNo':[
          { type : 'required', message : 'Pan Card No is mandatory' },
          { type :'pattern' , message : 'Pattern MisMatch' }
        ],

        'bankNo':[
          { type : 'required', message : 'Bank Account No is mandatory' },
          { type :'pattern' , message : 'Pattern MisMatch' }
        ],
       
        "refferal":[
          {type:'pattern', message:'Invalid pattern'}
        ],
        "planChoosen":[
          {type:"required", message:"CHOOSE ONE PLAN"}
        ],
        "dob":[
          { type:"matDatepickerMax" , message:"Do Not Exceed max date"},
          {type:"matDatepickerMin", message:"Do not enter less than min date"},
          { type:"pattern" , message:'Invalid format'}
        ],
        "address":[
          { type: 'required', message: 'Address details is Mandatory' },
          {type: 'minlength', message: 'Address details must be at least 5 characters long' },
          { type: 'maxlength', message: 'Address details cannot be more than 25 characters long' },
        ],
        "id":[
          {type:'required', message:'Mandatory Field'}
        ]

      
        
        
        }

}}