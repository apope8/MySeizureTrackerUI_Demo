import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeizureComponent } from '../seizure/seizure.component';
import { AddSeizureComponent } from '../add-seizure/add-seizure.component';
import { SeizureDetailsComponent } from '../seizure-details/seizure-details.component';


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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
