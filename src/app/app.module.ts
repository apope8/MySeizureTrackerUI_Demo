import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"


import { AppComponent } from './app.component';
import { SeizureComponent } from './seizure/seizure.component';
import { SeizureDetailsComponent } from './seizure-details/seizure-details.component';
import { AddSeizureComponent } from './add-seizure/add-seizure.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SeizureComponent,
    SeizureDetailsComponent,
    AddSeizureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
