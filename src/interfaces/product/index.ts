import { ReviewInterface } from 'interfaces/review';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  organization?: OrganizationInterface;
  _count?: {
    review?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  category?: string;
  organization_id?: string;
}
