import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AuthorizationComponent } from './auth/components/authorization.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SortComponent } from './core/components/sort/sort.component';
import { CardsComponent } from './youtube/components/cards/cards.component';
import { SearchResultsComponent } from './youtube/components/search-results/search-results.component';
import { FilterPipe } from './youtube/pipes/filter/filter.pipe';
import { SortPipe } from './youtube/pipes/sort/sort.pipe';
import { ColorBorderDirective } from './youtube/directives/color-border/color-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    HeaderComponent,
    SortComponent,
    CardsComponent,
    SearchResultsComponent,
    FilterPipe,
    SortPipe,
    ColorBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
