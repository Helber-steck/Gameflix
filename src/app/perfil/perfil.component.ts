import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

  // ...
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = "url('assets/fundo.png')";
  }

  ngOnInit(): void {
  }

}
