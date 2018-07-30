import { Component, OnInit } from '@angular/core';
import { TypeChartService } from '../type-chart.service';
import { Seizure } from '../seizure';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart-time',
  templateUrl: './chart-time.component.html',
  styleUrls: ['./chart-time.component.css']
})
export class ChartTimeComponent implements OnInit {
  chart = [];

  constructor(private _chartService: TypeChartService) { }

  ngOnInit() {
    this._chartService.timeChart()
    .subscribe(res => {
        console.log(res);

        const myLabels = []
        const myData = []

        Object.keys(res).forEach(function(key){         //creates an array of keys passing in the data from the URL
            const value = res[key];                    //assigns each value in the array to a variable called value
            myLabels.push(value.timeOfDay);            //gets data in time of day
            myData.push(value.total);                  //gets data in time of day
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
            },
            options: {
              title: {
                  display: true,
                  text: 'Seizures by Time of Day',
                  fontSize: 25
              },
              legend: {
                  display: true,
                  position: 'right',
                  labels: {
                      fontColor: '#000'
                  }
              },
              layout: {
                  padding: {
                      left: 50,
                      right: 0,
                      bottom: 0,
                      top: 0
                  }
              },
              tooltips:{
                  enabled: true
              }
          }
          });
    });
}

}
