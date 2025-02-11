import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import type { Blog } from '@/lib/api';

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(10, 'Content is required'), //.min(1, 'Description is required'),
  image: z.instanceof(File)
  .refine((file) => file.size <= 5 * 1024 * 1024, {
    message: 'File size must be less than or equal to 5MB',
  })
  .refine((file) => ['image/jpeg', 'image/png', 'image/jpg'].includes(file.type), {
    message: 'File type must be JPEG, PNG, or JPG',
  }),
});

// Placeholder file (you can replace this with an actual file if needed)
const defaultFile = new File([], 'placeholder.jpg', { type: 'image/jpeg' });

type FormData = z.infer<typeof formSchema>;

interface BlogFormProps {
  blog?: Blog;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
  isSubmitting: boolean;
}

export function BlogForm({
  blog,
  onSubmit,
  onCancel,
  isSubmitting,
}: BlogFormProps) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog?.title ?? '',
      content: blog?.content ?? '',
      image: defaultFile,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input {...field} type="file" isFileInput accept='image/*' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? blog
                ? 'Updating...'
                : 'Adding...'
              : blog
              ? 'Update Blog'
              : 'Add Blog'}
          </Button>
        </div>
      </form>
    </Form>
  );
}