import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MyOwnCustomMaterialModule} from './importMats.module';
import{EmployeeComponent} from './modules/employeeModule/employee.component'
import {EmployeeModule} from './modules/employeeModule/employee.module'
import {SharedModule} from  './modules/sharedModule/sharedModule'
import {NgxWebstorageModule} from "ngx-webstorage"
import { FormsModule } from '@angular/forms';
import {CustomerModule} from './modules/customerModule/customer.module'




@NgModule({ 
  declarations: [
    AppComponent,
    EmployeeComponent,
    
   
  ],
  imports: [
    CustomerModule,
    FormsModule,
    EmployeeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    BrowserModule,
    AppRoutingModule,
 
    NgxWebstorageModule.forRoot()
   
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
