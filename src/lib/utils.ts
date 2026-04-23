import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0,
  }).format(amount);
}


export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-RW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}


export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function getSchoolTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    PUBLIC: 'Public School',
    PRIVATE: 'Private School',
    GOVERNMENT_AIDED: 'Government Aided',
  };
  return labels[type] || type;
}

export function getGenderPolicyLabel(policy: string): string {
  const labels: Record<string, string> = {
    COED: 'Co-ed',
    BOYS_ONLY: 'Boys Only',
    GIRLS_ONLY: 'Girls Only',
  };
  return labels[policy] || policy;
}

// Calculate distance between two coordinates
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}