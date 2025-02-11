import { useState } from 'react';
import type { InventoryFilters } from '../types';

const defaultFilters: InventoryFilters = {
  search: '',
  stockStatus: 'all',
  sortBy: 'name-asc',
};

export function useInventoryFilters() {
  const [filters, setFilters] = useState<InventoryFilters>(defaultFilters);

  const resetFilters = () => setFilters(defaultFilters);

  return {
    filters,
    setFilters,
    resetFilters,
  };
}