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
