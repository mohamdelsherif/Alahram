import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
export interface PeriodicElement {
  name: number;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 123458, name: 123459, weight: 654321, symbol: 567890},
  {position: 122458, name: 153458, weight: 765432, symbol: 246801},
  {position: 125458, name: 223458, weight: 876543, symbol: 367432},
  {position: 123858, name: 127858, weight: 987654, symbol: 564563},
  {position: 123498, name: 121458, weight: 456789, symbol: 657563},
 
];
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule,MatTableModule,DialogModule,ButtonModule,InputTextModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  displayedColumns: string[] = ['position', 'name' ,'weight','symbol'];
  dataSource = ELEMENT_DATA;
  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }
}
