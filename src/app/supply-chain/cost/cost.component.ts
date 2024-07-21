import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  NgApexchartsModule
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
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
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: [21, 22, 10, 28, 16]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        width: 400,
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#3A4DE9",
        "#BA5F0B",
        "#3A4DE9",
        "#3A4DE9",
        "#3A4DE9",
      ],
      plotOptions: {
        bar: {
          columnWidth: "5%",
          distributed: true,
          
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          "John", "Doe",
          "Joe", "Smith",
          "Jake", 
        ],
        labels: {
          style: {
            colors: [
              "#3A4DE9",
              "#BA5F0B",
              "#3A4DE9",
              "#3A4DE9",
              "#3A4DE9",
           
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
}
