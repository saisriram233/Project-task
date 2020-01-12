import { Injectable } from '@angular/core';
import { customers } from './home/customer-data';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomers()
  {
    return Promise.resolve(customers);
  }
}
