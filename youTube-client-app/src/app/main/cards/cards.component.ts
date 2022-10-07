import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/models/search-response.model';
import { Item } from "../../models/search-item.model";
import * as cardData from "./mock.data.json"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: IResponse = cardData;
  items = this.cards.items;

  constructor() { }

  ngOnInit(): void {

    console.log(this.cards.items)

  }

}
