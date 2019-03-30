import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userPlanComponent } from './modules/employeeModule/userPlan/userPlan.component';
import { errorComponent } from './modules/employeeModule/pageNotFound/error.component';

import { dashboardComponent } from './modules/employeeModule/dashboard/dashboard.component';

import { vendorCategory} from './modules/employeeModule/vendorcategory/vendorCategory';
import { CustomerHomepageComponent } from './modules/customerModule/homepage/cust-homepage.component';


const routes: Routes = [
  { path:'', redirectTo:'/employee/userPlan' , pathMatch:"full"} , 

   {path:'customer/homepage',component:CustomerHomepageComponent},
  { path: 'employee/userPlan', component:userPlanComponent},
 { path:'employee/dashboard', component:dashboardComponent},
 {path: 'employee/vendorCategory' , component:vendorCategory},

 {path:'admin', loadChildren:'./modules/adminModule/admin.module#AdminModule'},
   { path:"**" , component:errorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
