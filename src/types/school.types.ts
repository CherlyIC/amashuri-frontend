export type SchoolType = 'PUBLIC' | 'PRIVATE' | 'GOVERNMENT_AIDED';
export type GenderPolicy = 'COED' | 'BOYS_ONLY' | 'GIRLS_ONLY';
export type SchoolStatus = 'DRAFT' | 'PENDING' | 'VERIFIED' | 'REJECTED';
export type StudentType = 'BOARDING' | 'DAY';

export interface Fee {
  id: string;
  schoolId: string;
  level: string;
  studentType: StudentType;
  amount: number;
  academicYear: string;
}

export interface Combination {
  id: string;
  schoolId: string;
  name: string;
  subjects: string;
}

export interface SchoolResource {
  id: string;
  schoolId: string;
  laboratory: boolean;
  library: boolean;
  computerRoom: boolean;
  sportsField: boolean;
  boardingHouse: boolean;
  chapel: boolean;
}

export interface Review {
  id: string;
  schoolId: string;
  userId: string;
  teachingRating: number;
  facilitiesRating: number;
  adminRating: number;
  overallRating: number;
  comment?: string;
  createdAt: string;
  user?: {
    id: string;
    name: string;
  };
}

export interface School {
  id: string;
  name: string;
  district: string;
  province: string;
  schoolType: SchoolType;
  genderPolicy: GenderPolicy;
  boarding: boolean;
  email?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
  logoUrl?: string;
  description?: string;
  yearEstablished?: number;
  totalStudents?: number;
  status: SchoolStatus;
  isVerified: boolean;
  createdAt: string;
  fees?: Fee[];
  combinations?: Combination[];
  resources?: SchoolResource;
  reviews?: Review[];
  avgRating?: number;
  totalReviews?: number;
}

export interface SchoolFilters {
  search?: string;
  district?: string;
  province?: string;
  schoolType?: SchoolType;
  genderPolicy?: GenderPolicy;
  boarding?: boolean;
  minFee?: number;
  maxFee?: number;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}