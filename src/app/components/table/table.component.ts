import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import KEYNAME from 'src/app/common/key.type';
import { Product } from 'src/app/models/product.model';
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
  constructor(private primengConfig: PrimeNGConfig, private tableService:TableService, public dialogService: DialogService, public messageService: MessageService, private router : Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.tableService.getAllTables().subscribe(data=> {
      this.tables = data;
      this.isLoading = false;
      console.log(this.tables)
    })

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
    @HostListener(KEYNAME.CTRLN, ['$event'])
    onCreate(event: KeyboardEvent): void {
      this.router.navigate(['/create-table'])
    }
}
