import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TableStatus } from '../models/table-status.model';
import { Table } from '../models/table.model';
import { OrderedTable } from '../models/ordered-table.model';
import { OrderedTableOfUser } from '../models/table-ordered-user.model';
import { TableProductUpdate } from '../models/table-product-update.model';
import { catchError, map, throwError } from 'rxjs';

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
      orderedProducts.push({quantity: p.quantity, status : p.status, product_id: p.product.id})
    })
    const data = {
      name: `Bàn của ${orderedTable.name}`,
      note: orderedTable.note,
      user: "admin",
      addProductDto : orderedProducts
    }
    return this.http.post <OrderedTableOfUser>(environment.apiBase+`admin/tableProduct`, data);

  }
  getProductOfTable(idTable: number|string | null){
    return this.http.get<OrderedTableOfUser>(environment.apiBase+`admin/table/${idTable}`);
  }
  updateProductOfTable(idTable: number|string|null, data: TableProductUpdate){
    return this.http.put(environment.apiBase + `admin/updateTable/${idTable}`, data);
  
  }
  /**
   * change status of table
   */
  updateSatusTable(idTable: number|string, data: unknown){
    return this.http.put(environment.apiBase + `admin/table/${idTable}`, data);
  }
}
