import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TableComponent } from './components/table/table.component';
import { CreateTableComponent } from './components/create-table/create-table.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'manage',
    component: ManagerComponent
  },
  {
    path: 'statistic',
    component: StatisticComponent
  },
  {
    path:'table',
    component: TableComponent
  },
  {
    path:'create-table',
    component: CreateTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
