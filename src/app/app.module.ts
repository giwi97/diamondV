import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './shared/about/about.component';
import { CustomMaterialRoutingModule } from './custom-material-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { AdminordersComponent } from './admin/adminorders/adminorders.component';
import { AdmincartsComponent } from './admin/admincarts/admincarts.component';
import { AdminusersComponent } from './admin/adminusers/adminusers.component';
import { OrdersComponent } from './user/orders/orders.component';
import { CartsComponent } from './user/carts/carts.component';
import { UserComponent } from './user/user/user.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SettingsComponent,
    AddproductComponent,
    AdmintabComponent,
    AdminordersComponent,
    AdmincartsComponent,
    AdminusersComponent,
    OrdersComponent,
    CartsComponent,
    UserComponent,
    ProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
