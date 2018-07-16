import { Component, OnInit } from '@angular/core';
import {MedicationService} from '../medication.service';
import {Location} from '@angular/common';
import {Medication} from '../medication';

@Component({
  selector: 'app-add-medication',
  templateUrl: './add-medication.component.html',
  styleUrls: ['./add-medication.component.css']
})
export class AddMedicationComponent {

  medication = new Medication();
  submitted = false;

  constructor(
    private medicationService: MedicationService,
    private location: Location
  ) { }

  newMedication(): void{
    this.submitted = false;
    this.medication = new Medication();
  }

  addMedication() {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.medicationService.addMedication(this.medication)
      .subscribe();
  }

}
