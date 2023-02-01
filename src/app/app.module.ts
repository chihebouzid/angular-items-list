import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';

import { HttpClientModule } from '@angular/common/http';
import { SorterComponent } from './sorter/sorter.component';
import { FilterComponent } from './filter/filter.component';
import { PriceDividerComponent } from './price-divider/price-divider.component';
import { PriceDividerPipe } from './price-divider.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    SorterComponent,
    FilterComponent,
    PriceDividerComponent,
    PriceDividerPipe,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
