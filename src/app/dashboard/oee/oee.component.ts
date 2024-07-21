import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CardModule } from 'primeng/card';
import { NGX_ECHARTS_CONFIG, NgxEchartsDirective, NgxEchartsModule } from 'ngx-echarts';
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
  selector: 'app-oee',
  standalone: true,
  imports: [NgxEchartsDirective,NgApexchartsModule,NgxEchartsModule,CardModule],
  templateUrl: './oee.component.html',
  styleUrl: './oee.component.scss',
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') })
    },
  ]
})
export class OeeComponent implements OnInit{
  value1: number = 73;
  value2 : number = (100-this.value1);
  option: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    // legend: {
    //   top: '5%',
    //   left: 'center'
    // },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '60%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 20,
          borderColor: '#fff',
          borderWidth: 5
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { 
            value: this.value1,
            name: 'Search Engine', 
            itemStyle: { color: '#f99963' } 
          },
          { 
            value: this.value2,
            name: 'Direct',
            itemStyle: { color: '#76b18b' }
          },
   
        ]
      }
    ],
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: 'OEE',
        fill: '#000',
        fontSize: 40,
        fontWeight: 'bold'
      }
    }
  };
  ngOnInit() {
 
  }
}
