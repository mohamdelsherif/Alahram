import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../../../domain/product';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ProductService } from '../../../service/productservice';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog/dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { DataService } from '../../../service/data.service';
import { data } from '../../../domain/data';
@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    TableModule, TagModule, ToastModule, RatingModule, 
    ButtonModule, MatButtonModule,CommonModule,
    FormsModule,DialogModule
],
  providers: [ProductService, MessageService,DataService],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {
  data : data[]= [];
  products!: Product[];

  expandedRows = {};

  constructor(private productService: ProductService,
            private messageService: MessageService,
            public dialog: MatDialog,
            private dataservice : DataService ) {}
  

  openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngOnInit() {
      this.productService.getProductsMini().then((data) => (this.products = data));
        this.dataservice.getData().subscribe(
          (response) => {
            console.log(response)
            this.data = response;
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );
  }

  expandAll() {
      this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
  }

  collapseAll() {
      this.expandedRows = {};
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
      }
      return 'success';
  }

  getStatusSeverity(status: string) {
      switch (status) {
          case 'PENDING':
              return 'warning';
          case 'DELIVERED':
              return 'success';
          case 'CANCELLED':
              return 'danger';
      }
      return 'success';
  }

  onRowExpand(event: TableRowExpandEvent) {
      this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
      this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
  }
}
