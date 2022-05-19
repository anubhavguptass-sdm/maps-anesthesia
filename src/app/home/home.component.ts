import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  slideConfig1 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    autoPlay: true,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  currentSelection: boolean = true;

  constructor() {}

  @ViewChild(LoginComponent) regComp: any;

  ngOnInit(): void {
    if (this.currentSelection === false) {
      this.regComp.myClassProp = true;
    }
  }

  slickInit() {
    // console.log('slick initialized');
  }

  breakpoint() {
    // console.log('breakpoint');
  }

  afterChange() {
    // console.log('afterChange');
  }

  beforeChange() {
    // console.log('beforeChange');
  }
}
