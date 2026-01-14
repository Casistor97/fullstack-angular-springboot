import { TouristProfile } from './tourist-profile';

export interface Reservation {
  id: number;
  dateReservation: string;
  prix: number;
  etat: 'EN_ATTENTE' | 'CONFIRMEE' | 'ANNULEE';
  tourist: TouristProfile;
}