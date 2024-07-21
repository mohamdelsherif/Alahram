import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TableModule, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { ProductService } from '../../../service/productservice';
import { Product } from '../../../domain/product';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from '../../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from '../department/dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { TableService } from '../../../service/tableservice';
import { Table } from '../../../domain/table';

@Component({
  selector: 'app-zones',
  standalone: true,
  templateUrl: './zones.component.html',
  styleUrl: './zones.component.scss',
  imports: [TableModule, CommonModule,DialogModule,ButtonModule,ToastModule,TagModule,RatingModule,FormsModule,HttpClientModule],
  providers: [ProductService,ApiService,MessageService]
})
export class ZonesComponent {
posts :Table[] =[];
  products: any =[];

  expandedRows = {};

private apiService = inject(TableService);
  constructor(private productService: ProductService,private messageService: MessageService ,public dialog: MatDialog ) {}
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  ngOnInit() {
    //   this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    console.log('hello35454')

      this.loadApi();
      console.log('hello')
  }
  loadApi (){
    this.apiService.getPosts().subscribe((resp:any)=>{
        console.log (resp);
        this.posts = resp
    }
    )
  }

//   expandAll() {
//       this.expandedRows = this.products.reduce((acc, p) => (acc[p.id] = true) && acc, {});
//   }

//   collapseAll() {
//       this.expandedRows = {};
//   }

//   getSeverity(status: string) {
//       switch (status) {
//           case 'INSTOCK':
//               return 'success';
//           case 'LOWSTOCK':
//               return 'warning';
//           case 'OUTOFSTOCK':
//               return 'danger';
//       }
//       return 'danger';
//   }

//   getStatusSeverity(status: string) {
//       switch (status) {
//           case 'PENDING':
//               return 'warning';
//           case 'DELIVERED':
//               return 'success';
//           case 'CANCELLED':
//               return 'danger';
//       }
//       return 'danger';
//   }

//   onRowExpand(event: TableRowExpandEvent) {
//       this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
//   }

//   onRowCollapse(event: TableRowCollapseEvent) {
//       this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
//   }
}
