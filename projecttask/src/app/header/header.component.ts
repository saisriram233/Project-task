import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
          label: 'Home',
          routerLink: ['/home']
      },
      {separator:true},
      {
          label: 'HTTP',
          routerLink: ['/http']
      },
      {separator:true},
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
  ];
  }

  logout()
  {
    this.router.navigate(['/login'])
  }

}
