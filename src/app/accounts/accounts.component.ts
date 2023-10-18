import { Component, OnInit } from '@angular/core';
import { CustomersType } from '../models/northwind/customers';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public value = '2';
  public northwindCustomers!: CustomersType[];
  public value1 = '1';

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
  }
}
