import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { SubstractorComponent } from './substractor/substractor.component';
import { FormsModule } from '@angular/forms';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    SubstractorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
