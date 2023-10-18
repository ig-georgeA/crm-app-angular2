import { AddressType } from './address';

export interface CustomersType {
  customerID: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: AddressType;
}
