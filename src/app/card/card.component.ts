import { Component, OnInit, Input } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public itemData;
  @Input() public item;
  public items: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  add() {
  this.items.push(this.itemData);
  console.log(this.itemData);
}
}

