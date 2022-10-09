import { Component, OnChanges, Input } from '@angular/core';
import { Item } from 'src/app/models/search-item.model';
import cardsData from './mock.data'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnChanges {

  @Input() searchTerm: string = '';

  @Input() results: Item[] = [];

  ngOnChanges() {

    if (this.searchTerm) this.results = cardsData.items;
    console.log(this.results)

  }

}

