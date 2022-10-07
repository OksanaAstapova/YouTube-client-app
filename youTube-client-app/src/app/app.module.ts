import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { HeaderComponent } from './header/header.component';
import { SearchBlockComponent } from './search-block/search-block.component';
import { SortComponent } from './main/sort/sort.component';
import { CardsComponent } from './main/cards/cards.component';
import { SearchResultsComponent } from './main/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    SearchBlockComponent,
    SortComponent,
    CardsComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
