import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component';
import { AddOrEditProductModalComponent } from './add-or-edit-product-modal/add-or-edit-product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteProductModalComponent,
    AddOrEditProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
