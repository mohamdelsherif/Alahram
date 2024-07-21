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
  selector: 'app-commodities',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './commodities.component.html',
  styleUrl: './commodities.component.scss'
})
export class CommoditiesComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: [21, 10, ]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        width: 400,
        events: {
          click: function(chart, w, e) {
            //  console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#1CAD99",
        "#EEC35E",
       
      ],
      plotOptions: {
        bar: {
          columnWidth: "35%",
          distributed: true
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
          "Budget Saving",
          "Project Saving",
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#FEB019",
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }
}
