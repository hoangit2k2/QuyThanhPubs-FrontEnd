import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService, PrimeNGConfig, SelectItem } from 'primeng/api';
import { Category } from 'src/app/models/category.model';
import { DeliveryProductSatus } from 'src/app/models/delivery-product-status.enum';
import { ItemProduct } from 'src/app/models/item.model';
import { OrderedTable } from 'src/app/models/ordered-table.model';
import { Product } from 'src/app/models/product.model';
import { AlertService } from 'src/app/services/alert.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import { TableService } from 'src/app/services/table.service';
import { Location } from '@angular/common';
import { OrderedTableOfUser } from 'src/app/models/table-ordered-user.model';
import { TableStatus } from 'src/app/models/table-status.model';
import { NotFoundComponent } from '../not-found/not-found.component';
import { map } from 'rxjs';
import { TableProductUpdate } from 'src/app/models/table-product-update.model';
@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.css']
})
export class EditTableComponent implements OnInit {
  idTable!: string|null;
  isLoading!: boolean;
  isNull!: boolean;
  layout = 'grid'
  items!: MenuItem[];
  tempTotal: number = 0;
  categories: Category[] = []
  sortOptions !: SelectItem[];
  sortField!: string;
  sortOrder!: number;
  sortKey!: string
  value4: number = 50;
  products : Product[] = [];
  isSaving: boolean = false;
  orderedProducts: ItemProduct[] =[];
  tableProductUpdate: TableProductUpdate[] = []
  orderedTableOfUser: OrderedTableOfUser = {
    name: '',
    phone: '',
    user: '',
    tableProducts: [],
    note: '',
    id: 0,
  
  };
  menuCheckout!: MenuItem[];
  
  /**
   * @constructor
   * @param route 
   * @param primengConfig 
   * @param productService 
   * @param categoryService 
   * @param storeService 
   * @param tableService 
   * @param alertService 
   * @param location 
   */
  constructor(private route : ActivatedRoute, private primengConfig: PrimeNGConfig, 
    private productService: ProductService, 
    private categoryService: CategoryService,
    private storeService: StoreService,
    private tableService: TableService,
    private alertService: AlertService,
    private location: Location) { }

    /**
     * @override ngOnInit
     */
    ngOnInit(): void {
      this.idTable = this.route.snapshot.paramMap.get('id');
      this.initDataOrderedTableOfUser()
      // categories sidebar
     this.categoryService.getAllCategories().subscribe(data => {
      this.categories=data;
      var subitems = [{
        label : "Tất cả",
        command : () =>{
          this.showProducts()
        },
        styleClass: 'icon-all'
     
  
      }]
      this.categories.map(c => {
          subitems = [...subitems, {
            label: c.name,
            command : () =>{
              this.showProducts(c.id)
            },
            styleClass: `icon${c.id}`
      
          }]
      })
      this.items = [{ label: 'DANH MỤC SẢN PHẨM',items: subitems}]
      this.showProducts()
     })
    this.primengConfig.ripple = true;
    }
    initDataOrderedTableOfUser(){
      this.tableService.getProductOfTable(this.idTable).subscribe((response)=>{
        this.orderedTableOfUser = response;
        console.log(this.orderedTableOfUser);
         this.tempTotal =  this.orderedTableOfUser.tableProducts.reduce((previousValue, currentValue) => previousValue + currentValue.product.price * currentValue.quantity , 0 )
      });
    }

    /**
     * @method addProductCart
     * @param product
     */
    addProductCart(product: Product){
     const check =  this.orderedTableOfUser.tableProducts.some(p=>p.product.id === product.id);
     if (check) {
        this.orderedTableOfUser.tableProducts.forEach(p => {
          if (p.product.id === product.id) {
              p.quantity += 1;
              if (p.status === DeliveryProductSatus.DELIVERED){
                  p.status = DeliveryProductSatus.NOT_YET_DELIVERED
              }
          }
        })
         console.log(this.orderedTableOfUser.tableProducts)
     }
     else{
      const data = {
        id: null,
        product : product,
        quantity: 1,
        status: DeliveryProductSatus.NOT_YET_DELIVERED
      }
      console.log(data)
     this.orderedTableOfUser.tableProducts = [data, ...this.orderedTableOfUser.tableProducts ];
      console.log(this.orderedTableOfUser.tableProducts)
     }
     this.tempTotal =  this.orderedTableOfUser.tableProducts.reduce((previousValue, currentValue) => previousValue + currentValue.product.price * currentValue.quantity , 0 )
    }
    /**
     * @method showProducts
     * @param id 
     */
    showProducts(id?: number){
      this.isLoading =true
      this.isNull = true;
      if (id === undefined) {
        this.productService.getAllProducts().subscribe(data => {
          this.products = data
          this.isLoading= false
          if(this.products.length ===0){
            this.isNull = true;
          }
          else{
            this.isNull = false;
          }
        });
      }
      else{
        this.productService.getProductsByCategory(id).subscribe(data => {
          this.products = data
          this.isLoading= false
          if(this.products.length ===0){
            this.isNull = true;
          }
          else{
            this.isNull = false;
          }
        });
      }
      
      
      
    }
  
    deleteOrderedProduct(orderedProduct: ItemProduct){
     const product = orderedProduct.product;
      const check =  this.orderedTableOfUser.tableProducts.some(p=>p.product.id === product.id);
      if (check) {
        const index = this.orderedTableOfUser.tableProducts.findIndex(p=>p.product.id === product.id);
        this.orderedTableOfUser.tableProducts.splice(index, 1);
        
      }
      if (orderedProduct.id !== null){
        this.tableService.removeOrderedProduct(orderedProduct.id).subscribe(data=>{
          this.alertService.showAlert('success', 'Thông báo', 'Sản phẩm đã xoá thành công')
        })
      }
    
      this.tempTotal =  this.orderedTableOfUser.tableProducts.reduce((previousValue, currentValue) => previousValue + currentValue.product.price * currentValue.quantity , 0 )
      console.log( this.orderedTableOfUser.tableProducts)
    }
    
    changePrice(product: Product, $event:any){
      const value = $event.value
      const check =  this.orderedTableOfUser.tableProducts.some(p=>p.product.id === product.id);
      if (check){
        this.orderedTableOfUser.tableProducts.filter(p=>{
          if (p.product.id === product.id){
            p.quantity = value;
          }
        })
      }
      this.tempTotal =  this.orderedTableOfUser.tableProducts.reduce((previousValue, currentValue) => previousValue + currentValue.product.price * currentValue.quantity , 0 )
     
    }
    
    /**
     * @method back()
     */
    back(){
      this.location.back();
    }

    /**
     * @method searchProduct
     */
    typingTimeout : any;
    search($event: any){
      clearTimeout(this.typingTimeout);
  
      // Lấy giá trị đã nhập từ event.target.value
      const inputValue = $event.target.value;
    
      // Tạo timeout mới
      this.typingTimeout = setTimeout(() => {
        
        this.isLoading =true
        this.isNull = true;
        if (inputValue === '') {
          this.productService.getAllProducts().subscribe(data => {
            this.products = data
            this.isLoading= false
            if(this.products.length ===0){
              this.isNull = true;
            }
            else{
              this.isNull = false;
            }
          });
        }
        else{
          this.productService.getProductByLikeName(inputValue).subscribe(data => {
            this.products = data
            this.isLoading= false
            if(this.products.length ===0){
              this.isNull = true;
            }
            else{
              this.isNull = false;
            }
          });
        }
  
      }, 500);
    }

    /**
     * @method getStateTableIsUsing
     * @return {boolean}
     */
   getStateTableIsUsing() : boolean {
    return this.orderedTableOfUser.tableProducts.some((product) => product.status === DeliveryProductSatus.DELIVERED);
   }

   changeStatusOfProduct(orderedProduct: ItemProduct){
      this.orderedTableOfUser.tableProducts.forEach(p => {
        if (p.id === orderedProduct.id){
          p.status = DeliveryProductSatus.DELIVERED;
        }
      })
   }
   saveTable(){
    this.tableProductUpdate = []
    this.orderedTableOfUser.tableProducts.forEach(p => {
      this.tableProductUpdate = [...this.tableProductUpdate , {tableProductId : p.id, quantity: p.quantity, status: p.status, productId: p.product.id}];
    })
    this.tableService.updateProductOfTable(this.idTable, this.tableProductUpdate).subscribe(data=> {
      console.log(data)
    })
  
   }

}
