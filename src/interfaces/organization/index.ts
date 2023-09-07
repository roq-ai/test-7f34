import { BlogInterface } from 'interfaces/blog';
import { ProductInterface } from 'interfaces/product';
import { VideoInterface } from 'interfaces/video';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blog?: BlogInterface[];
  product?: ProductInterface[];
  video?: VideoInterface[];
  user?: UserInterface;
  _count?: {
    blog?: number;
    product?: number;
    video?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
