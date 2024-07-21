import { Component, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent,
  ApexOptions,
  ApexLegend,
  NgApexchartsModule
} from "ng-apexcharts";
import { NGX_ECHARTS_CONFIG, NgxEchartsModule } from 'ngx-echarts';

export type ChartOptions = {
series: ApexNonAxisChartSeries;
chart: ApexChart;
legend : ApexLegend;
options :ApexOptions;
responsive: ApexResponsive[];
labels: any;
};
@Component({
  selector: 'app-up-time',
  standalone: true,
  imports: [NgApexchartsModule,NgxEchartsModule],
  templateUrl: './up-time.component.html',
  styleUrl: './up-time.component.scss',
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') })
    },
  ]
})
export class UpTimeComponent {
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
          { value: 1048, name: 'Search Engine', itemStyle: { color: '#f99963' } },
          { value: 735, name: 'Direct', itemStyle: { color: '#76b18b' } },
   
        ]
      }
    ],
    graphic: {
      type: 'text',
      left: 'center',
      top: 'center',
      style: {
        text: 'UP-Time',
        fill: '#000',
        fontSize: 40,
        fontWeight: 'bold'
      }
    }
  };
  ngOnInit() {
    
  }
}
