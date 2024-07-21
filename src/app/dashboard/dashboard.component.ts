import { Component, inject } from '@angular/core';
import { ZonesComponent } from "./zones/zones.component";
import { OeeComponent } from "./oee/oee.component";
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department/department.component';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../domain/product';
import { SupplierComponent } from "../supply-chain/supplier/supplier.component";
import { ProductionComponent } from "../species-of-cows/production/production.component";
import { UpTimeComponent } from "./up-time/up-time.component";
import { CardModule } from 'primeng/card';
import { CostComponent } from "../species-of-cows/cost/cost.component";
import { DataService } from '../../service/data.service';
interface City {
  name: string;
}
interface Day {
  name: string;
}
interface option {
  name: string,
}
interface cows{
    count: number,
    totalPrices: number
}
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    providers: [ApiService,DataService],
    imports: [ZonesComponent, FormsModule,
        DropdownModule, CommonModule, TableModule,
        SupplierComponent, ProductionComponent,
        CardModule, CostComponent, OeeComponent, UpTimeComponent, DepartmentComponent]
})
export class DashboardComponent {
  private http = inject(HttpClient);
  Data :any;
  Pro :any;
  Cows :any;
  date2: Date | undefined;
  sidebar: any;
  cities: City[] | undefined;
  selectedCity: City | undefined;
  Options!: option[];
  formGroup!: FormGroup;
  day : Day[]|undefined;
ngOnInit() {
 
    this.Options = [
        { name: 'department1'},
        { name: 'department2'},
    ];

    this.formGroup = new FormGroup({
        selectedCities: new FormControl<option[] | null>([{ name: 'department1' }])
    });
    this.cities = [
        { name: '2020' },
        { name: '2021'  },
        { name: '2022',  },
        { name: '2023', }
    ]
    this.day = [
      { name: 'Saturday' },
      { name: 'Sunday'  },
      { name: 'Monday',  },
      { name: 'Tuesday', },
      { name: 'Wednesday', },
      { name: 'Thursday', },
      { name: 'Friday', },
  ]
  
}


}
