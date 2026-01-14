import { Reservation } from './reservation';

export interface Payment {
  id: number;
  datePayment: string;
  prix: number;
  etat: 'PAYE' | 'EN_ATTENTE' | 'ECHEC';
  reservation: Reservation;
}