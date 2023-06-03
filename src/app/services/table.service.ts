import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TableStatus } from '../models/table-status.model';
import { Table } from '../models/table.model';
import { OrderedTable } from '../models/ordered-table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getAllTables() {
    return this.http.get <Table[]> (environment.apiBase+ `admin/table?status=${TableStatus.SERVING}`)
  }
  createTable(orderedTable: OrderedTable){
    var orderedProducts = new Array();
    orderedTable.orderedProducts.forEach(p => {
      orderedProducts.push({number: p.quantity, status : p.status, product_id: p.product.id})
    })
    const data = {
      name: `Bàn ${orderedTable.name}`,
      note: orderedTable.note,
      user: "admin",
      addProductDto : orderedProducts
    }
    return this.http.post(environment.apiBase+`admin/table_product`, data);

  }

}
