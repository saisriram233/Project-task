import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CustomerService } from '../customer.service';
import { Customer } from './customer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public customerservice: CustomerService) { }

  customers: Customer[];
  cols: any[];
  ngOnInit() {
    this.getCustomers()
  }
  getCustomers() {
    this.customerservice.getCustomers().then(customers => this.customers = customers)
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'NAME' },
      { field: 'acnum', header: 'AC/NUM' },
      { field: 'Date', header: 'DATE OF JOINING' },
      { field: 'Balance', header: 'BALANCE' }
    ];
  }

}
