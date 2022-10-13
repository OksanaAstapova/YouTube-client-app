import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @Output() search = new EventEmitter<string>();

  public searchTerm: string = '';

  isShown: boolean = false;

  @Output() show = new EventEmitter<boolean>();

  public filterState!: boolean;

  public sortBy = '';

  public filterData = '';


  constructor() { }

     searchResponse(): void {
      if (this.searchTerm) this.search.emit(this.searchTerm);
    }

    toggleShow() {

      this.isShown = ! this.isShown;
      this.show.emit(this.isShown);

    }

  }
