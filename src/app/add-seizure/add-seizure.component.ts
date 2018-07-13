import { Component, OnInit } from '@angular/core';
import { Seizure } from '../seizure';
import { SeizureService } from '../seizure.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-seizure',
  templateUrl: './add-seizure.component.html',
  styleUrls: ['./add-seizure.component.css']
})

export class AddSeizureComponent{

  seiz = new Seizure();
  submitted = false;

  constructor(
    private seizService: SeizureService,
    private location: Location
  ) { }

  newSeizure(): void {
    this.submitted = false;
    this.seiz = new Seizure();
  }

 addSeizure() {
   this.submitted = true;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.seiz);
    this.seizService.addSeizure(this.seiz)
        .subscribe();
  }
}
