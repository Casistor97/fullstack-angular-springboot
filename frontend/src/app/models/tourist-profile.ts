import { User } from './user';

export interface TouristProfile {
  id: number;
  nom: string;
  prenom: string;
  nationality: string;
  phone: string;
  image?: string;
  user: User;
}