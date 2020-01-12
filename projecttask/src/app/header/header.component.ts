import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          routerLink: ['/home']
      },
      {separator:true},
      {
          label: 'Account View',
          routerLink: ['/acview']
      },
      {separator:true},
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
  ];
  }

}
