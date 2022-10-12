import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Output() search = new EventEmitter<string>();

  public searchTerm: string = '';

  isShown: boolean = false;

  public filterState!: boolean;

  public sortBy = '';

  public filterData = '';


  constructor() { }

     searchResponse(): void {
      if (this.searchTerm) this.search.emit(this.searchTerm);
      console.log(this.searchTerm);
    }

    toggleShow() {

      this.isShown = ! this.isShown;

    }

  }
