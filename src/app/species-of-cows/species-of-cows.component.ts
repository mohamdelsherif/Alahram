import { Component } from '@angular/core';
import { OeeComponent } from "../dashboard/oee/oee.component";
import { ProductionComponent } from "./production/production.component";
import { CostComponent } from "./cost/cost.component";
import { IssuesComponent } from "./issues/issues.component";
import { DiedComponent } from "./died/died.component";
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { color } from 'echarts';
import { CalendarModule } from 'primeng/calendar';
@Component({
    selector: 'app-species-of-cows',
    standalone: true,
    templateUrl: './species-of-cows.component.html',
    styleUrl: './species-of-cows.component.scss',
    imports: [OeeComponent, ProductionComponent, CostComponent,
       IssuesComponent, DiedComponent,FormsModule,
        CheckboxModule,CommonModule,CalendarModule,
      ]
})
export class SpeciesOfCowsComponent {
  date2: Date | undefined;
  selectedCategories: any[] = [];

  categories: any[] = [
      { name: 'Now there was 80% of feed1'},
      { name: 'There is a shortage of feed in the store !'},
      { name: 'The Store has been filled with feed (80%)'},
      { name: 'Lack of feed5!'},
      { name: 'Now there was 50% of feed6'},
      { name: 'The feed5 is on shipping tracking'},
      { name: 'Now there was 80% of feed1'},
      { name: 'There is a shortage of feed in the store !'},
      { name: 'Lack of feed5!'},
      { name: 'Now there was 50% of feed6'},
      { name: 'The feed5 is on shipping tracking'}

  ];
}
