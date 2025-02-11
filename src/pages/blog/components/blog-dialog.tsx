import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BlogForm } from './blog-form';
import { useBlogMutations } from '../hooks/use-blog-mutations';
import type { Blog } from '@/lib/api';

interface BlogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: Blog;
}

export function BlogDialog({
  open,
  onOpenChange,
  blog,
}: BlogDialogProps) {
  const { addBlog, updateBlog } = useBlogMutations();

  const handleSubmit = async (data: {
    title: string;
    content: string;
    image: string;
  }) => {
    const blogData = {
      title: data.title,
      content: data.content,
      image: data.image,
    };

    if (blog) {
      await updateBlog({ id: blog.id, data: blogData });
    } else {
      await addBlog(blogData);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {blog ? 'Edit Blog' : 'Add New Blog'}
          </DialogTitle>
        </DialogHeader>
        <BlogForm
          blog={blog}
          onSubmit={handleSubmit}
          onCancel={() => onOpenChange(false)}
          isSubmitting={false}
        />
      </DialogContent>
    </Dialog>
  );
}