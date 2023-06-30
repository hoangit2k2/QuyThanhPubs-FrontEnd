import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/manager/manager.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TableComponent } from './components/table/table.component';
import { CreateTableComponent } from './components/create-table/create-table.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyDataResolver } from './utils/resolve.util';
import { AuthGuard } from './guard.guard';
import { AuthenticationGuard } from './authentication.guard';
import { UserGuideComponent } from './components/user-guide/user-guide.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage',
    component: ManagerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'table',
    component: TableComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'table/:id',
    component: EditTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'create-table',
    component: CreateTableComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'user-guide',
    component: UserGuideComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component:AuthComponent,
    resolve:{
      data: MyDataResolver
    },
    canActivate: [AuthenticationGuard]
  },
  {
    path: "**",
    pathMatch: 'full',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
