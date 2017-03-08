
import { Component, OnInit} from '@angular/core';
import {Image} from './image.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public images = IMAGES;
  constructor() {
  }
//  the end of the constructors

  ngOnInit() {
  }
}
var IMAGES: Image[] = [

  {"url":"src/images/team-3.jpg",
    "title":"Edgar mlowe",
    "position":"Manager",
    "caption":`Developing a portable and
    a reliable software is passion in development itself,
    lets keep coding and bring positive changes in development cycle`
  },
  {"url":"src/images/team-8.jpg",
    "title":"Tito Francis",
    "position":"Database designer",
    "caption":`Back-end development is the best part in the system,
     not all people know what is happening when they press a button
     but we make things happen when the button is pressed.`
  },
  {"url":"src/images/annie.jpg",
    "title":"Aneth Nemes",
    "position":"Mobile designer",
    "caption":`Computer programming is the heart for advancement of science and technology.
    Lets code and make our world of technology be a better place to live in. Happy coding.`
  },
  {"url":"src/images/team-5.jpg",
    "title":"Iddi Msangi",
    "position":"Web designer",
    "caption":`Web designing brings out the art that is in developer's mind
    and makes it beautiful in the real world,
    where everyone can see the beauty of that art.`
  },
  {"url":"src/images/team-2.jpg",
    "title":"Beatrice Charles",
    "position":"Web designer",
    "caption":`Beauty is in the eyes of the beholder but we all try to
      make beautiful things regardless of what we think and what we want,
      it is the responsibility of the front-end developer to make thing look good and attractive.
      Lets code and make a beautiful world.`
  }
];
