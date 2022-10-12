import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'youTube-client-app';

  public searchTerm = '';

  isShown: boolean;

  public sortBy = '';

  public filterData = '';

  getState(bool: boolean){

    this.isShown = bool;
    console.log(bool)
  }

  getSearchTerm(item: any) {
    this.searchTerm = item;
  }

  getSort(item: string) {
    this.sortBy = item;
  }

  getFilter(event: Event) {
    const target = event.target as HTMLInputElement;
    this.filterData = target.value;
    console.log(this.filterData)
  }


}
