import { Component, OnInit } from '@angular/core';
import { Seizure } from '../seizure';
import { SeizureService } from '../seizure.service';

@Component({
  selector: 'app-seizure',
  templateUrl: './seizure.component.html',
  styleUrls: ['./seizure.component.css']
})

export class SeizureComponent  implements OnInit {

  Seizures: Seizure[];

  constructor(private seizureService: SeizureService) {}

  ngOnInit(): void {
     this.getSeizures();
  }

  getSeizures() {
    return this.seizureService.getSeizures()
               .subscribe(
                 Seizures => {
                  console.log(Seizures);
                  this.Seizures = Seizures;
                 }
                );
 }

}
