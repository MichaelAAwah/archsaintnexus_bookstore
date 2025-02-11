import { create } from 'zustand';
import type { Blog } from '@/lib/api';

interface BlogDialogState {
  isOpen: boolean;
  blog?: Blog;
  openDialog: (blog?: Blog) => void;
  closeDialog: () => void;
}

export const useBlogDialog = create<BlogDialogState>((set) => ({
  isOpen: false,
  product: undefined,
  openDialog: (blog) => set({ isOpen: true, blog }),
  closeDialog: () => set({ isOpen: false, blog: undefined }),
}));