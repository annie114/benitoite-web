import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css']
})
export class OurServiceComponent implements OnInit {
      title = "Web Design";
    description = `We design websites and we also offer
  advice in web designing. contact us for more information.`;
  // public items;
  constructor() { }

  ngOnInit() {
  }

}
// var  items:Array<any>= [
//   {"title":"Web Design","description ": `We design websites and we also offer
//    advice in web designing. contact us for more information.`},
//   {
//     "title":"Web Hosting", "description":`We offer a wide selection of packages.
//     Contact us for our full price list and Web hosting options.`
//   },
//   {
//     "title":"Domain Registration","description":`Register in local .
//     tz domain (for Tsh per year) and we also register international domains.`
//   }
// ];

