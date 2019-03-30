import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {blockShow} from '../../globalServices/blockShow';
import {toggle} from '../../globalServices/toggle';
import {SuccessComponent} from './successSnackbar';
@NgModule({
    imports: [
        CommonModule
     ],
    declarations: [
       toggle,blockShow,SuccessComponent
    ],
    exports: [
       toggle,blockShow
    ]
})
export class SharedModule {}