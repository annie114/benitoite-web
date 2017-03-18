import { Component, OnInit } from '@angular/core';
import { Portfolio } from './portfolio.interface';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
public portfolios = PORTFOLIOS;
  constructor() { }

  ngOnInit() {
  }

}

var PORTFOLIOS :Portfolio [] = [
  {"url": "src/images/images (2).jpg", "title" : "Tuseme Web application", "description": "Here is some more information about this product that is only revealed once clicked on"},
  {"url": "src/images/images (3).jpg", "title": "Kipaji Mobile application", "description":"Here is some more information about this product that is only revealed once clicked on."},
  {"url": "src/images/images (1).jpg", "title": "Ecosytem Web application", "description":"Here is some more information about this product that is only revealed once clicked on"},
  {"url": "src/images/images (1).jpg", "title": "Benitoite Website", "description":"Here is some more information about this product that is only revealed once clicked on"},
  {"url": "src/images/images (3).jpg", "title": "Wazawa Website", "description":"Here is some more information about this product that is only revealed once clicked on"},
  {"url": "src/images/images (2).jpg", "title": "web hosting", "description":"Here is some more information about this product that is only revealed once clicked on"}
];
