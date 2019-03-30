import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../sharedModule/sharedModule';
import { MyOwnCustomMaterialModule } from 'src/app/importMats.module';
import { CustomerHomepageComponent } from './homepage/cust-homepage.component';
import { CustomerComponent } from './customer.component';
import { customerheaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    CustomerComponent,
    customerheaderComponent,
    CustomerHomepageComponent,
    NavbarComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MyOwnCustomMaterialModule,
    CommonModule
  ],
  exports:[]
})
export class CustomerModule { }
