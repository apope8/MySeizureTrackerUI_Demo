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
import { ChartTriggerComponent } from './chart-trigger/chart-trigger.component';
import { ChartTimeComponent } from './chart-time/chart-time.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SeizureComponent,
    SeizureDetailsComponent,
    AddSeizureComponent,
    MedicationComponent,
    MedicationDetailsComponent,
    AddMedicationComponent,
    ChartsComponent,
    ChartTriggerComponent,
    ChartTimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [TypeChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
