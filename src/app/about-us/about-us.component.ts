import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  descrp =`Benitoite was founded in november 2016 with the team of ' 
        five people who have same ambition on programming`;
  about = `We are free developers, we have knowledge and skills,' +
      our aim is to solve different problems in our society.`;

//        Works = [
//          {
//            title: 'Power of flexibility', description: 'We are able to deliver the software right on time and our team has well organized people in terms of field of practice.'
//          },
//          {
//            title: 'full responsive', description : `Responsive web design is the practice of
//            building a website suitable to work on every device and
//             every screen size, no matter how large or small, mobile or desktop.
//             Responsive web design is focused around
//             providing an intuitive and gratifying experience for everyone.`
//           },
//           {
//             title: 'great web ideas', description: `We generate different ideas which are suitable for our clients.
//             We also accept different innovative ideas and use our skills to automate and make it practical.`
//           }
//
// ];

  // @Input() datasource;
  // selectedImage;
  //
  // setSelectedImage(image){
  //   this.selectedImage= image;
  // }
  ngOnInit() {
  }


}
