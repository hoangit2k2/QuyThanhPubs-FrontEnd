import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
    menu: any[] = [];
    itemActive: number  = 1;
    showUI: boolean = false;

    toggleUI() {
      this.showUI = !this.showUI;
    }
  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        id: 1,
        title: "Quản lý sản phẩm",
        icon : "pi pi-box",
        select(id: number, item: any) {
          this.itemAction = id;
          console.log(item);
        }
      },
      {
        id: 2,
        title: "Quản lý danh mục",
        icon : "pi pi-list",
        select(id: number) {
          this.itemAction = id;
          console.log(this.itemAction);
        }
      },
      {
        id: 3,
        title: "Quản lý tài khoản",
        icon : "pi pi-users",
        select(id: number) {
          this.itemAction = id;
              console.log(this.itemAction);
        }
      },
    ]
  }

}
