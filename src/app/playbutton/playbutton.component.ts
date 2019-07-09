import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-playbutton',
  templateUrl: './playbutton.component.html',
  styleUrls: ['./playbutton.component.css']
})
export class PlaybuttonComponent implements OnInit {
  @Output() public item = new EventEmitter();
  @Input() public find;
  @Input() public item1;
  playresponse: any;
  constructor(private serv: ServerService) { }

  ngOnInit() {
  }
  playtrack() {
    window.open(this.item1);
    // this.serv.getArtist(this.find).subscribe((response) =>  {
    //     this.playresponse = response.results.artistmatches.artist;
    //     console.log(response);
    // });
    // this.item.emit(this.playresponse);
  }

}
