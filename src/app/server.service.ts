import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient ) { }
  getArtist(name) {
   return this.http.get('http://ws.audioscrobbler.com/2.0/?method=artist.search&artist='+name+'&api_key=4447508c455dedea4c5c7d5858282092&format=json');
  }
}
