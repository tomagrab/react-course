import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewBlogFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }).max(25, {
    message: 'Title must be less than 20 characters',
  }),
  body: z.string().min(1, { message: 'Body is required' }).max(10000, {
    message: 'Body must be less than 10000 characters',
  }),
  categories: z
    .array(z.string())
    .min(1, { message: 'Category is required' })
    .max(3, {
      message: 'You can only select up to 3 categories',
    }),
  tags: z.array(z.string()).min(1, { message: 'Tag is required' }).max(5, {
    message: 'You can only select up to 5 tags',
  }),
});

export default function NewBlogForm() {
  const newBlogForm = useForm<z.infer<typeof NewBlogFormSchema>>({
    resolver: zodResolver(NewBlogFormSchema),
    defaultValues: {
      title: '',
      body: '',
      categories: [],
      tags: [],
    },
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: z.infer<typeof NewBlogFormSchema>) => {
    const blog = {
      title: data.title,
      body: data.body,
      categories: data.categories,
      tags: data.tags,
    };

    try {
      setLoading(true);
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blog),
      });

      navigate('/');
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categories = e.target.value.split(',');
    newBlogForm.setValue('categories', categories);
  };

  const handleTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',');
    newBlogForm.setValue('tags', tags);
  };

  return (
    <Form {...newBlogForm}>
      <form
        className={`mx-auto flex w-full max-w-md flex-col gap-2 rounded-md px-4 py-8 shadow-lg`}
        onSubmit={newBlogForm.handleSubmit(onSubmit)}
      >
        <FormField
          control={newBlogForm.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={newBlogForm.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body</FormLabel>
              <FormControl>
                <Textarea placeholder="Body" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={newBlogForm.control}
          name="categories"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categories</FormLabel>
              <FormControl>
                <Input
                  placeholder="Categories"
                  {...field}
                  onChange={handleCategories}
                />
              </FormControl>
              <FormDescription>
                <p>Categories and tags are comma separated values</p>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={newBlogForm.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags</FormLabel>
              <FormControl>
                <Input placeholder="Tags" {...field} onChange={handleTags} />
              </FormControl>
              <FormDescription>
                <p>Tags are comma separated values</p>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {error ? (
          <div>
            <p className="text-sm text-red-500">{error}</p>
          </div>
        ) : null}

        <Button type="submit">{loading ? 'Creating...' : 'Create Blog'}</Button>
      </form>
    </Form>
  );
}
