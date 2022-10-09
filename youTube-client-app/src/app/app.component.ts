import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'youTube-client-app';
  public searchTerm = '';

  getSearchTerm(item: any) {
    this.searchTerm = item;
  }

}
