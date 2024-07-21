import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartmentComponent } from "../dashboard/department/department.component";
import { UpTimeComponent } from "../dashboard/up-time/up-time.component";
import { OeeComponent } from "../dashboard/oee/oee.component";
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
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    providers: [DataService],
    imports: [DepartmentComponent, UpTimeComponent, OeeComponent]
})
export class HomeComponent {
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
  this.getData();
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
// getCost(){
//   return this.http.get('http://192.168.1.120:5107/api/Feeds/GetTotalFeedWeight').subscribe((data :any)=>{
//     console.log (data);
//     this.Data= data;
//   });
// }
// getproduction(){
//   return this.http.get(' http://192.168.1.120:5107/api/Cows/Production').subscribe((data :any)=>{
//     console.log (data);
//     this.Pro= data;
//   });
// }
// numOfCows(){
//   return this.http.get('http://192.168.1.120:5107/api/Cows/countofCow').subscribe((data :any)=>{
//     console.log (data);
//     this.Cows= data;
//   });
// }
getData(){
  return this.http.get('http://192.168.1.120:5107/api/Cows/GetSummary').subscribe((data :any)=>{
        console.log (data);
        this.Data= data;
     });
}
}
