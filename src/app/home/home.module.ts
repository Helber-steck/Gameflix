import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { NgxGlideModule } from 'ngx-glide';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,    
    CarouselModule,
    NgxGlideModule,
    
  ]
})
export class HomeModule { }
