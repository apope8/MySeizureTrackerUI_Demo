import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeizureComponent } from '../seizure/seizure.component';
import { AddSeizureComponent } from '../add-seizure/add-seizure.component';
import { SeizureDetailsComponent } from '../seizure-details/seizure-details.component';
import { MedicationComponent } from '../medication/medication.component';
import { AddMedicationComponent } from '../add-medication/add-medication.component';
import { MedicationDetailsComponent } from '../medication-details/medication-details.component';
import { ChartsComponent } from '../charts/charts.component';
import { ChartTriggerComponent } from '../chart-trigger/chart-trigger.component';
import { ChartTimeComponent } from '../chart-time/chart-time.component';


const routes: Routes = [
  {
    path: 'seizures',
    component: SeizureComponent
  },
  {
    path: 'seizures/add',
    component: AddSeizureComponent  
  },
  {  
    path: 'seizures/:id',
    component: SeizureDetailsComponent
  },
  {  
    path: '',
    redirectTo: 'seizures',
    pathMatch: 'full'
  },
  {
    path: 'medications',
    component: MedicationComponent
  },
  {
    path: 'medications/add',
    component: AddMedicationComponent  
  },
  {  
    path: 'medications/:id',
    component: MedicationDetailsComponent
  },
  {
    path:'charts/type',
    component: ChartsComponent
  },
  {
    path:'charts/trigger',
    component: ChartTriggerComponent
  },
  {
    path:'charts/time',
    component: ChartTimeComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
