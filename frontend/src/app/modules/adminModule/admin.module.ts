import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { routingComponents } from './admin-routing.module';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import {AddDialogComponent} from './Dialogs/Add/add-dialog.component';
import {DeleteDialogComponent} from './Dialogs/Delete/delete-dialog.component';
import { EditDialogComponent} from './Dialogs/Edit/edit-dialog.component';
import{TableComponent} from './table/table.component';
import {ImageCrud} from './productUpload/services/imageCrud';
import {FormsModule} from '@angular/forms';
import {MyOwnCustomMaterialModule} from '../../importMats.module';
import {Jsonretriever} from '../../globalServices/jsonretreiver';
import { CategoryJsonretriever } from "../../globalServices/categorylistjson";
import {ReactiveFormsModule} from '@angular/forms'
import {SharedModule} from "../sharedModule/sharedModule";
import { DataService } from './moduleServices/dataService';
import { DialogDataService } from './moduleServices/dialogDataService';
import { SuccessComponent } from '../sharedModule/successSnackbar';
import {  Data } from "./moduleServices/dataStorage";
import {adminheaderComponent} from "./header/header.component";
import {AuthInterceptor} from './moduleServices/AuthInterceptor'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Dologin } from './login/service/dologin';
import {HttpClientModule} from '@angular/common/http';
import { SubproductsDataComponent } from './subproducts-data/subproducts-data.component';
import { UploadService } from './subproducts-data/services/uploadform';
import {PushChanges} from './table/services/pushobject'
import { excelUpload } from './productUpload/services/excelUpload';
@NgModule({
    declarations:[
        AdminComponent,
        routingComponents,
        AddDialogComponent,
        DeleteDialogComponent,
        EditDialogComponent,
         TableComponent,
         adminheaderComponent,
         SubproductsDataComponent
       
    ],
    exports:[],
    providers: [Jsonretriever,CategoryJsonretriever,ImageCrud,DataService,
        DialogDataService,Data,Dologin,UploadService,PushChanges,excelUpload,{
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
    }],
    imports:[ 
        HttpClientModule,
        FormsModule,
        SharedModule,
        MyOwnCustomMaterialModule,
         CommonModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ]
    ,
    entryComponents:[ AddDialogComponent,
        DeleteDialogComponent,
        EditDialogComponent,
    SuccessComponent
    ]
})

export class AdminModule{

}