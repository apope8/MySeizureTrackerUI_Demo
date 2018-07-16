import { Component, OnInit } from '@angular/core';
import { Medication } from '../medication';
import { MedicationService } from '../medication.service';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})

export class MedicationComponent implements OnInit {

  medication: Medication[];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.getMedications();
  }

  getMedications() {
    return this.medicationService.getMedications()
    .subscribe(
      Medication => {
        console.log(Medication);
        this.medication = Medication;
      }
    );
  }

}
