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
import { FormsModule } from '@angular/forms';
import {SplitterModule} from 'primeng/splitter';
import { CreateTableComponent } from './components/create-table/create-table.component';
import {ChartModule} from 'primeng/chart';
import { FieldsetModule } from 'primeng/fieldset';
import {InputNumberModule} from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BadgeModule } from 'primeng/badge';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerComponent,
    StatisticComponent,
    TableComponent,
    CreateTableComponent
  ],
  imports: [
    BrowserModule,
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
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
