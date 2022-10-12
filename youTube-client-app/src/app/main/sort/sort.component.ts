import { Component, EventEmitter, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {

  @Output() filter = new EventEmitter<Event>();

  @Output() filterData: string = '';

  @Output() sort = new EventEmitter<string>();

  public date: boolean = false;

  public views: boolean = false;

  sortByDate() {
    this.date = !this.date;
    this.sort.emit(`date-${this.date ? 'up' : 'down'}`);
    console.log(this.date)

  }

  sortByViews() {
    this.views = !this.views;
    this.sort.emit(`views-${this.views ? 'up' : 'down'}`);
    console.log(this.views)
  }

  constructor() { }


}
