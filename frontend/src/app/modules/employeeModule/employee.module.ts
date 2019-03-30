import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule }    from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from '../../importMats.module';

import {signupComponent}from './signup/signup.component';
import{ loginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {offerservice} from './userPlan/services/offer.service';
import {ReactiveFormsModule} from '@angular/forms'
import { Jsonretriever } from '../../globalServices/jsonretreiver';
import { getErrorMessage } from '../../globalServices/Validation';
import { userPlanComponent } from './userPlan/userPlan.component';
import { errorComponent } from './pageNotFound/error.component';

import { dashboardComponent } from './dashboard/dashboard.component';

import { vendorCategory} from './vendorcategory/vendorCategory';
import {crudOperation} from "../../globalServices/crud";
import {NgxWebstorageModule} from "ngx-webstorage"
import { imageUpload } from "./signup/services/imageUpload";
import { DateFormat } from "../../globalmodel/dateFormat";
import {CategoryJsonretriever} from "../../globalServices/categorylistjson";

import {SharedModule} from '../sharedModule/sharedModule'
import{employeeheaderComponent} from './header/header.component'

@NgModule({ 
  declarations: [
    signupComponent,
    loginComponent,
  
   userPlanComponent,errorComponent,dashboardComponent,vendorCategory,
  employeeheaderComponent

  ],
  imports: [
  SharedModule,
    FormsModule,
    HttpClientModule,
    MyOwnCustomMaterialModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxWebstorageModule.forRoot()
   
  ],
  providers: [offerservice,Jsonretriever,getErrorMessage,crudOperation,imageUpload,CategoryJsonretriever],

})
export class EmployeeModule { }
