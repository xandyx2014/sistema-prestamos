import { Component, OnInit } from '@angular/core';
import { URL_PAGE } from '../../config/variable.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  folders = URL_PAGE;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  irPagina(item) {
    console.log( 'hi' );
    this.router.navigate([item.url]);
  }
  irHome() {
    this.router.navigate(['/pages']);
  }
  salir() {
    this.router.navigate(['/login']);
  }
}
