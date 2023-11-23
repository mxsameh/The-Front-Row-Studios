import {IMetafield} from './metafield';

export interface ICustomer {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  birthDate: string;
  defaultAddress: any;
}

export interface IShopifyCustomer {
  id?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  defaultAddress: any;
  metafield: IMetafield;
}
