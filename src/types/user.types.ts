export interface User {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'SCHOOL_ADMIN' | 'ADMIN';
  createdAt: string;
  _count?: {
    reviews: number;
    favourites: number;
    enquiries: number;
  };
}