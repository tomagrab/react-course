import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import BlogPostBody from '@/components/Layout/BlogPost/BlogPostBody/BlogPostBody';
import BlogPostCategories from '@/components/Layout/BlogPost/BlogPostCategories/BlogPostCategories';
import BlogPostTags from '@/components/Layout/BlogPost/BlogPostTags/BlogPostTags';
import BlogPostTitle from '@/components/Layout/BlogPost/BlogPostTitle/BlogPostTitle';
import { Trash } from 'lucide-react';

type BlogPostProps = {
  blogPost: BlogPostType;
  handleDelete: (id: number) => void;
};

export default function BlogPost({ blogPost, handleDelete }: BlogPostProps) {
  return (
    <div className={`flex justify-between`}>
      <div className={`flex flex-col gap-2`}>
        <BlogPostTitle title={blogPost.title} />
        <BlogPostBody body={blogPost.body} />
      </div>
      <div className={`flex flex-col gap-2`}>
        <BlogPostCategories categories={blogPost.categories} />
        <BlogPostTags tags={blogPost.tags} />
        <div>
          <button
            onClick={() => blogPost.id && handleDelete(blogPost.id)}
            className={`rounded-md bg-red-500 px-4 py-2 text-white`}
          >
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
