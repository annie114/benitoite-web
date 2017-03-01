import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }
      descrp ='Benitoite was founded in november 2016 with the team of five people who have same ambition on programming';

  about = 'We are free developers, we have knowledge and skills, our aim is to solve different problems in our society.';

  ngOnInit() {
  }

}
