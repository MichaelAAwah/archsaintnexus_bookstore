import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { Blog } from '@/lib/api';
import { getToken } from '@/lib/utils';

interface BlogInput {
  title: string;
  content: string;
  image: string;
}

export function useBlogMutations() {
  const queryClient = useQueryClient();

  const { mutate: addBlog } = useMutation({
    mutationFn: async (data: BlogInput) => {
      const token = getToken()
      const body = JSON.stringify({
        title: data.title,
        content: data.content,
        image: data.image,
      })

      const responseData = await fetch(`http://localhost:3001/inventory`, {
        method: 'POST',
        body,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`
        }
      })
      const response = await responseData.json()

      if(!response || !responseData.ok) {
        throw new Error()
      }
      
      return response;
      return {
        id: Math.random().toString(36).slice(2),
        ...data,
        vendorId: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    },
    onSuccess: (newBlog) => {
      queryClient.setQueriesData({ queryKey: ['products'] }, (old: Blog[] = []) => [
        newBlog,
        ...old,
      ]);
      // toast.success('Blog added successfully');
    },
    onError: () => {
      // toast.error('Failed to add product');
    },
  });

  const { mutate: updateBlog } = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: BlogInput }) => {
      const token = getToken()
      const updatedData = {
        title: data.title,
        content: data.content,
        image: data.image,
      }
      const body = JSON.stringify(updatedData)

      const responseData = await fetch(`http://localhost:3001/inventory/${id}`, {
        method: 'PATCH',
        body,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`
        }
      })
      const response = await responseData.json()

      if(!response || !responseData.ok) {
        throw new Error()
      }
      
      return {
        id,
        ...updatedData,
        // vendorId: '1',
        // updatedAt: new Date().toISOString(),
      };
    },
    onSuccess: (updatedBlog) => {
      console.log({updatedBlog})
      queryClient.setQueriesData({ queryKey: ['products'] }, (old: Blog[] = []) =>
        old.map((product) =>
          product.id === updatedBlog.id ? { ...product, ...updatedBlog } : product
        )
      );
      // toast.success('Blog updated successfully');
    },
    onError: () => {
      // toast.error('Failed to update product');
    },
  });

  return {
    addBlog,
    updateBlog,
  };
}