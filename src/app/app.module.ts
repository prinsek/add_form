import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PartitionComponent } from './app.component';
import { MatCardModule } from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatExpansionModule} from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    PartitionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule

  
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
