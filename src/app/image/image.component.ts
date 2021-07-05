import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  img: any;
  img1: any;
  constructor(private is: ImageServiceService) {}

  ngOnInit(): void {
    this.is.get().subscribe((res) => {
      //this.img = JSON.stringify(res);
      this.img = res;
      // this.img1 = JSON.stringify(this.img.message);
      this.img1 = this.img.message;
      console.log(this.img1);
    });
  }
}
