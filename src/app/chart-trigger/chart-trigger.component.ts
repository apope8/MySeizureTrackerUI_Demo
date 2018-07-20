import { Component, OnInit } from '@angular/core';
import { TypeChartService } from '../type-chart.service';
import { Seizure } from '../seizure';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart-trigger',
  templateUrl: './chart-trigger.component.html',
  styleUrls: ['./chart-trigger.component.css']
})
export class ChartTriggerComponent implements OnInit {
    chart = [];

    constructor(private _chartService: TypeChartService) { }
    
    ngOnInit() {
        this._chartService.triggerChart()
        .subscribe(res => {
            console.log(res);

            const myLabels = []
            const myData = []

            Object.keys(res).forEach(function(key){
                const value = res[key];
                myLabels.push(value.trigger);
                myData.push(value.total);
            });

            console.log(myLabels);
            console.log(myData);

            this.chart = new Chart('canvas', {
                type: 'doughnut',
                data: {
                  labels: myLabels,
                  datasets: [
                    {
                      data: myData,
                      backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
                    }
                  ]
                }
              });
        });
    }

}