import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images = IMAGES;

  constructor() { }

  ngOnInit() {
  }

}

//IMAGES array implementing Image interface
var IMAGES: Image[] = [
  { "title": "Web application", "url": "src/images/Web-developer.jpg" },
  { "title": "mobile application", "url": "src/images/mobile .png" },
  { "title": "desktop application", "url": "src/images/desktop.jpg" },
  { "title": "web hosting", "url": "src/images/images.jpg" },
  { "title": "domain registration", "url": "src/images/domain.jpg" }
];


