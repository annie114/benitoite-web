import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  constructor() {

  }

  @Input() datasource;
  selectedImage;

  setSelectedImage(image) {
    this.selectedImage = image;
  }

  ngOnInit() {
  }

}
