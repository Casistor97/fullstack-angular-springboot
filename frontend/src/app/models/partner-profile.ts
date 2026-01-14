import { User } from './user';

export interface PartnerProfile {
  id: number;
  partnername: string;
  phone: string;
  address: string;
  image?: string;
  link?: string;
  user: User;
}