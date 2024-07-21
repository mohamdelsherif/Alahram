import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexOptions,
  ApexLegend,
  NgApexchartsModule
} from "ng-apexcharts";

export type ChartOptions = {
series: ApexNonAxisChartSeries;
chart: ApexChart;
legend : ApexLegend;
options :ApexOptions;
responsive: ApexResponsive[];
labels: any;
};
@Component({
  selector: 'app-cost',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.scss'
})
export class CostComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;  
  constructor() {};
  ngOnInit(): void {
    this.chartOptions = {
      series: [45,30,25],
      chart: {
        type: 'donut',
        
      },
      colors: [ '#EEC35EE5','#131F92', '#1CAD99'], // Specify your colors here
      labels: [ 'Type 1','Type 2','Type 3'],
      dataLabels: {
        enabled: false
      },
      // title: {
      //   text: 'My Donut Chart'
      // },
      
      legend: {
        position: 'bottom',
        show : false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '60%',
            labels : {
              show : true,
              value:{
                show: true,
                fontSize: "30",
                fontWeight: 3,
                
              },
              // total : {
              //   show : true ,
              //   showAlways : true,
              //   label : "OEE",
              //   fontSize:"40",
              //   fontWeight: 3,
              // }
            }
          }
        }
      }
    };
};
}
