import { Component, Input } from '@angular/core';
import { Http2Server } from 'http2';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() noOfImages = 5;
  images = [];
  constructor( private http: HttpClient){

  }
  clickEvent(){
    const url = "https://api.pexels.com/v1/search?query=nature&page=1&per_page="+ this.noOfImages;
    this.http.get(url, {
      headers : new HttpHeaders({
        "Authorization" : "563492ad6f9170000100000195a054d4a56547aab275017c0c80e61b",
      })
    }).subscribe(
      response => {
        const data = response;
        console.log(data);
        this.images = data['photos'];
      },
      error => {

      }
    )
  }
}
