import { Component, OnInit } from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public images = IMAGES;

          title = "benitoite ";

        heading1= `'Benitoite based on solving your software problems.we create web application,;
  mobile application,domain name registration and hosting.the service we give results to the best product`

      head1= `we are`;
      head2 =`bemitoite is the part of solution in web development.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
      sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
        `;

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


