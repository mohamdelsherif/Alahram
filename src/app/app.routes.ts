import { Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { SpeciesOfCowsComponent } from './species-of-cows/species-of-cows.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '' ,redirectTo: '/dashboard' ,pathMatch: 'full'
    },
    {
        path : 'dashboard' , component: DashboardComponent
    },
    {
        path : 'home' , component: HomeComponent
    },
    {
        path : 'supply' , component: SupplyChainComponent
    },
    {
        path : 'cows' , component: SpeciesOfCowsComponent
    }
];
