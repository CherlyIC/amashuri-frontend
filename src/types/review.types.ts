export interface CreateReviewDto {
  teachingRating: number;
  facilitiesRating: number;
  adminRating: number;
  overallRating: number;
  comment?: string;
}

export interface ReviewStats {
  teaching: number;
  facilities: number;
  admin: number;
  overall: number;
}