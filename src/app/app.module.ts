import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

@NgModule({
  //Declare components to use in the module
  declarations: [
    AppComponent,
    StockItemComponent
  ],
  // Importing modules to use in this module
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  // Exports are modules that you want to export to be used elsewhere
  // or in other apps
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
