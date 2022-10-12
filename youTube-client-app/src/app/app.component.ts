import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'youTube-client-app';

  public searchTerm = '';

  isShown: boolean = true;

  public sortBy = '';

  public filterData = '';

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
