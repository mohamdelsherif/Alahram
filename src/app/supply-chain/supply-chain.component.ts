import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { CommoditiesComponent } from "./commodities/commodities.component";
import { OeeComponent } from "../dashboard/oee/oee.component";
import { CostComponent } from './cost/cost.component';
import { CowsComponent } from "./cows/cows.component";
import { SupplierComponent } from "./supplier/supplier.component";
import { HttpClient } from '@angular/common/http';
import { DepartmentComponent } from "../dashboard/department/department.component";
import { UpTimeComponent } from '../dashboard/up-time/up-time.component';
interface items {
  name: string;
  
}
@Component({
    selector: 'app-supply-chain',
    standalone: true,
    templateUrl: './supply-chain.component.html',
    styleUrl: './supply-chain.component.scss',
    imports: [FormsModule, CheckboxModule, DropdownModule, CommoditiesComponent, 
      OeeComponent, CostComponent, UpTimeComponent,
      CowsComponent, SupplierComponent, DepartmentComponent]
})
export class SupplyChainComponent implements OnInit {
  cities: items[] | undefined;
  Data : any;
  Items: items | undefined;
  private http = inject(HttpClient);
  ngOnInit() {
      // this.cities = [
      //     { name: 'Feed 1'},
      //     { name: 'Feed 2'},
      //     { name: 'Feed 3' },
      //     { name: 'Feed 4' },
      //     { name: 'Feed 5' },
      //     { name: 'Feed 6' },
      //     { name: 'Feed 7' },
      //     { name: 'Feed 8' },
      //     { name: 'Feed 9' },
      //     { name: 'Feed 10' },
      // ];
      this.getItems();
  }
  changeData(e){
    console.log(e.target.value)
  }
  getItems(){
    return this.http.get('http://192.168.1.120:5107/api/Feeds/AllFeeds').subscribe((data :any)=>{
      console.log (data);
      this.Data= data;
   });
  }
}
