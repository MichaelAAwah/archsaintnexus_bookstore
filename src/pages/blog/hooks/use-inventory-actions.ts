import { getToken } from '@/lib/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export function useInventoryActions() {
  const queryClient = useQueryClient();

  const { mutate: deleteProduct } = useMutation({
    mutationFn: async (id: number) => {
      const token = getToken()

      const responseData = await fetch(`http://localhost:3001/inventory/${id}`, {
        method: 'DELETE',
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
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product deleted successfully');
    },
    onError: () => {
      toast.error('Failed to delete product');
    },
  });

  return {
    deleteProduct,
  };
}