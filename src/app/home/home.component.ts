import { Component, OnInit } from '@angular/core';
import { CustomersType } from '../models/northwind/customers';
import { MeetingsTasksType } from '../models/crmapp/meetings-tasks';
import { RevenueType } from '../models/e-commerce/revenue';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppService } from '../services/crmapp.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public eCommerceRevenue!: RevenueType[];
  public northwindCustomers!: CustomersType[];
  public cRMAppMeetingsTasks!: MeetingsTasksType[];

  constructor(
    private eCommerceService: ECommerceService,
    private northwindService: NorthwindService,
    private cRMAppService: CRMAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
    this.northwindService.getData('CustomersType').subscribe(data => this.northwindCustomers = data);
    this.cRMAppService.getMeetingsTasks().subscribe(data => this.cRMAppMeetingsTasks = data);
  }
}
