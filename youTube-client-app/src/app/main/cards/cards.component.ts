import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/search-item.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent{

  @Input() result: Item;

}
