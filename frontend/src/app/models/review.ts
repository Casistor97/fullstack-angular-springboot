import { TouristProfile } from './tourist-profile';

export interface Review {
  id: number;
  review: number;
  commentaire: string;
  dateReviews: string;
  tourist: TouristProfile;
}