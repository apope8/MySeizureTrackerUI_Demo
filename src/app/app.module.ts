import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms"


import { AppComponent } from './app.component';
import { SeizureComponent } from './seizure/seizure.component';
import { SeizureDetailsComponent } from './seizure-details/seizure-details.component';
import { AddSeizureComponent } from './add-seizure/add-seizure.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MedicationComponent } from './medication/medication.component';
import { MedicationDetailsComponent } from './medication-details/medication-details.component';
import { AddMedicationComponent } from './add-medication/add-medication.component';
import { TypeChartService } from './type-chart.service';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    SeizureComponent,
    SeizureDetailsComponent,
    AddSeizureComponent,
    MedicationComponent,
    MedicationDetailsComponent,
    AddMedicationComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TypeChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
