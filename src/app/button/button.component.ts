import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() public itemData;

public items: string[] = [];
  constructor() { }

  ngOnInit() {
  }
 add() {
   this.items.push(this.itemData);
   console.log(this.itemData);
 }
}
