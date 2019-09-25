import { Component, OnInit } from '@angular/core';
import { URL_PAGE } from '../../config/variable.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  paginas = URL_PAGE;
  constructor( private router: Router ) { }

  ngOnInit() {
  }
  irPagina(url: string) {
    this.router.navigate([url]);
  }

}
