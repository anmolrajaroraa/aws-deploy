import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import {productUploadComponent} from './productUpload/productUpload.component'
import {categoryCrud} from './categoryCrud/categoryCrud'
import { adminloginComponent } from "./login/login.component";
import { AdminComponent } from "./admin.component";


const routes: Routes = [
  {path:'', component:AdminComponent,
   children:[
     {path:'login',component:adminloginComponent},
    {path:'categorycrud',component:categoryCrud},
    {path:'productUpload',component:productUploadComponent},
   ]},
    
  
  ];


@NgModule({
    imports: [CommonModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }
  export const routingComponents=[AdminComponent,categoryCrud,productUploadComponent,adminloginComponent];
  