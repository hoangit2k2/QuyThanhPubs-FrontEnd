import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Table } from 'src/app/models/table.model';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tables: Table[] = [];
   sortOptions !: SelectItem[];
   isLoading!: boolean ;
   sortField!: string;
   sortOrder!: number;
   sortKey!: string
  constructor(private primengConfig: PrimeNGConfig, private tableService:TableService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.tableService.getAllTables().subscribe(data=> {
      this.tables = data;
      this.isLoading = false;
    })
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];

  this.primengConfig.ripple = true;
  }
  onSortChange(event:any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
}
