import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getToken() {
  const storage = localStorage.getItem('auth-storage')
  if(storage) {
    const { state } = JSON.parse(storage)
    return state.token || ''
  }
  return ''
}

export function toFloat(number: string | number) {
  if(number) {
    return parseFloat(number?.toString().split(',').join('')) || 0
  }
  return 0
}

export function formatDate(isoDate: string): string {
  const date: Date = new Date(isoDate);

  // Extract day, month, and year
  const day: number = date.getUTCDate();
  const month: string = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
  const year: number = date.getUTCFullYear();

  return `${day} ${month}, ${year}`;
}