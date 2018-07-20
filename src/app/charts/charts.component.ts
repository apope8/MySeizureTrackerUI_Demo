import { Component, OnInit } from '@angular/core';
import { TypeChartService } from '../type-chart.service';
import { Seizure } from '../seizure';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chart = [];

  constructor(private _typeChart: TypeChartService) { }

  ngOnInit() {
    this._typeChart.typeChart()
      .subscribe(res => {

        console.log(res)
        //res = <Array<any>>res;

        //let sType = res['seizureType'].map(res => res.Array.seizureType)
        //let amount = res['Array'].map(res => res.Array.total)

        let myLabels = [];
        let myData = [];

        Object.keys(res).forEach(function (key) {
          let value = res[key];
          myLabels.push(value.seizureType);
          myData.push(value.total);
      });

        /*for(let i=0; i<Array.from(res).length; i++){
          console.log(res[i])
          let newLabel = res[i].seizureType;
          let newData = res[i].total;
          myLabels.push(newLabel);
          myData.push(newData);
        }*/

        /*for('seizureType' in res) {

        }*/

        console.log(myLabels)
        console.log(myData)


        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: myLabels,
            datasets: [
              {
                data: myData
              }
            ]
          }
        })

        // this.chart = new Chart('canvas', {
        //   type: 'pie',
        //   data: {
        //     labels: [
        //       'Myoclonic',
        //       'Other',
        //       'Tonic Clonic'
        //     ],
        //     datasets: [
        //       {
        //         data: [
        //           10,
        //           20,
        //           30
        //         ],
        //         backgroundColor: [
        //           'rgb(255, 0, 0)',
        //           'rgb(0, 255, 0)',
        //           'rgb(0, 0, 255)'
        //         ],
                
        //         borderWidth: 1,
        //         borderColor: '#777',
        //         hoverBorderWidth: 3,
        //         hoverBorderColor: '#000'
        //       }]
        //   },
        //   options: {
        //     title: {
        //       display: true,
        //       text: 'Types Of Seizures',
        //       fontSize: 25
        //     },
        //     legend: {
        //       display: true,
        //       position: 'right',
        //       labels: {
        //         fontColor: '#000'
        //       }
        //     },
        //     layout: {
        //       padding: {
        //         left: 50,
        //         right: 0,
        //         bottom: 0,
        //         top: 0
        //       }
        //     },
        //     tooltips: {
        //       enabled: true
        //     }
        //   }
        // });
      })
  }
}
