import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PagesComponent } from "./pages/pages.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { ZonesComponent } from './dashboard/zones/zones.component';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, PagesComponent, SidenavComponent, DashboardComponent,HttpClientModule,ZonesComponent]
})
export class AppComponent implements OnInit{
  title = 'ElRwada';
  
  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  constructor(private apiService :ApiService ){}

  ngOnInit(): void {
    // this.fetchData(); 
  }
  //  fetchData(){
  //   this.http.get('http://192.168.1.120:5107/api/Cows/GetBarns').subscribe((resp : any )=>{
  //     console.log (resp)
  //   })
  //  }
  // fetchData (){
  //   this.apiService.getPosts().subscribe((resp:any)=>{
  //     console.log(resp)
  //   })
  //  }
}
