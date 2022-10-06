import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortComponent } from './sort/sort.component';
import { CardsComponent } from './cards/cards.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { HeaderComponent } from './header/header.component';
import { SearchBlockComponent } from './search-block/search-block.component';

@NgModule({
  declarations: [
    AppComponent,
    SortComponent,
    CardsComponent,
    AuthorizationComponent,
    CreateCardComponent,
    MoreInfoComponent,
    SearchResultComponent,
    SearchItemComponent,
    HeaderComponent,
    SearchBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
