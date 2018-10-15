import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [ MatSnackBarModule,MatRadioModule,MatCheckboxModule,MatProgressSpinnerModule],
  exports: [MatSnackBarModule,MatRadioModule,MatCheckboxModule,MatProgressSpinnerModule]
})
export class MaterialModule { }
