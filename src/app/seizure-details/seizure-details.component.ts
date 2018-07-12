import { Component, OnInit } from '@angular/core';
import { Seizure } from '../seizure';
import { SeizureService } from '../seizure.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seizure-details',
  templateUrl: './seizure-details.component.html',
  styleUrls: ['./seizure-details.component.css']
})
export class SeizureDetailsComponent implements OnInit {

  seizure = new Seizure();
  submitted = false;
  message: string;

  constructor(
    private seizureSevice: SeizureService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.seizureSevice.getSeizure(id)
    .subscribe(Seizure => this.seizure = Seizure);
  }

  update(): void {
    this.submitted = true;
    this.seizureSevice.updateSeizure(this.seizure)
    .subscribe(() => this.message = "Seizure Record has been updated");
  }

  delete(): void{
    this.submitted = true;
    this.seizureSevice.deleteSeizure(this.seizure.id)
    .subscribe(()=> this.message = "Seizure Record has been Removed")
  }

  goBack(): void {
    this.location.back()
  }

}
