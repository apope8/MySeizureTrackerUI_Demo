import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeizureComponent } from './seizure/seizure.component';
import { SeizureDetailsComponent } from './seizure-details/seizure-details.component';
import { AddSeizureComponent } from './add-seizure/add-seizure.component';

@NgModule({
  declarations: [
    AppComponent,
    SeizureComponent,
    SeizureDetailsComponent,
    AddSeizureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
