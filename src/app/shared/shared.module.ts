import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsPipe } from './pipes/form-errors.pipe';
import { TextPluginsPipe } from './pipes/text-plugins.pipe';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select'; 

@NgModule({
  declarations: [
    FormErrorsPipe,
    TextPluginsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormErrorsPipe,
    TextPluginsPipe,
    MatCardModule,
    RouterModule,
    MatSelectModule
  ]
})
export class SharedModule { }
