import {NgModule} from '@angular/core'
import {MatButtonModule, 
  MatCheckboxModule,
  MatTableModule,
  MatTabsModule,
  MatGridListModule,
  MatRadioModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatStepperModule,MatTreeModule,
  MatListModule,MatCardModule,MatSnackBarModule
 } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatTableModule,MatTabsModule,MatStepperModule,
    MatGridListModule,MatRadioModule,MatFormFieldModule,MatTreeModule,MatSnackBarModule,
    MatIconModule,MatInputModule,MatSelectModule,MatListModule,MatCardModule,
    MatDatepickerModule,MatNativeDateModule,MatProgressSpinnerModule,
    MatToolbarModule,MatMenuModule ,MatAutocompleteModule,MatProgressBarModule],
  exports: [MatButtonModule, MatCheckboxModule,
    MatTableModule,MatTabsModule,MatGridListModule,
    MatRadioModule,MatFormFieldModule,MatIconModule,
    MatInputModule,MatSelectModule,MatDatepickerModule,MatCardModule,MatSnackBarModule,
    MatNativeDateModule,MatToolbarModule ,MatMenuModule,MatListModule,
    MatAutocompleteModule,MatProgressBarModule,MatProgressSpinnerModule,MatStepperModule,MatTreeModule]
})
export class MyOwnCustomMaterialModule { }