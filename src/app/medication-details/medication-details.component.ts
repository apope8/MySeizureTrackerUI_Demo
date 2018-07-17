import { Component, OnInit } from '@angular/core';
import {Medication} from '../medication';
import {MedicationService} from '../medication.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.css']
})
export class MedicationDetailsComponent implements OnInit {

  medication = new Medication();
  submitted = false;
  message: string;

  constructor(
    private medicationService: MedicationService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.medicationService.getMedication(id)
      .subscribe(medication => this.medication = medication);
  }

  update(): void {
    this.submitted = true;
    this.medicationService.updateMedication(this.medication)
      .subscribe(() => this.message = 'Medication record has been updated');
  }

  delete(): void {
    this.submitted = true;
    this.medicationService.deleteMedication(this.medication.id)
      .subscribe(() => this.message = 'Medication record has been removed');
  }

  goBack(): void {
    this.location.back();
  }

}
