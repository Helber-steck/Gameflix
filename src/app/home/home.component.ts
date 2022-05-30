import { AfterViewInit, Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgxGlideComponent } from 'ngx-glide';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit,OnInit  {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/games.jpg')";
    
  }
  ngOnInit(): void {
    
  }
  customOptions: OwlOptions = {
    loop: false,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}  


