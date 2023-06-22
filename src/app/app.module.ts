import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component'
import { DialogModule } from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PasswordModule } from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import { ManagerComponent } from './components/manager/manager.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import { TableComponent } from './components/table/table.component';
import {ToolbarModule} from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SplitterModule} from 'primeng/splitter';
import { CreateTableComponent } from './components/create-table/create-table.component';
import {ChartModule} from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';
import {InputNumberModule} from 'primeng/inputnumber';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ChipModule } from 'primeng/chip';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProductService } from './services/product.service';
import { TagModule } from 'primeng/tag';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { AvatarModule } from 'primeng/avatar';
import { AuthInterceptor } from './auth.interceptor';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyDataResolver } from './utils/resolve.util';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerComponent,
    StatisticComponent,
    TableComponent,
    CreateTableComponent,
    EditTableComponent,
    NotFoundComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ChipModule,
    TagModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
    PasswordModule,
    InputTextModule,
    BreadcrumbModule,
    MenuModule,
    ToolbarModule,
    SplitButtonModule,
    DataViewModule,
    RatingModule,
    DropdownModule,
    FormsModule,
    SplitterModule,
    ChartModule,
    PanelModule,
    FieldsetModule,
    DividerModule,
    ScrollPanelModule,
    InputNumberModule,
    HttpClientModule,
    InputTextareaModule,
    BadgeModule,
    ProgressSpinnerModule,
    ToastModule,
    TableModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    AvatarModule,
    ConfirmPopupModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiBase],
        
      },
    })
    
  ],
  providers: [MessageService, ConfirmationService, DialogService,MyDataResolver, { 
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
