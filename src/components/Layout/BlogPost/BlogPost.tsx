import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import BlogPostBody from '@/components/Layout/BlogPost/BlogPostBody/BlogPostBody';
import BlogPostCategories from '@/components/Layout/BlogPost/BlogPostCategories/BlogPostCategories';
import BlogPostTags from '@/components/Layout/BlogPost/BlogPostTags/BlogPostTags';
import BlogPostTitle from '@/components/Layout/BlogPost/BlogPostTitle/BlogPostTitle';

type BlogPostProps = {
  blogPost: BlogPostType;
};

export default function BlogPost({ blogPost }: BlogPostProps) {
  return (
    <div>
      <BlogPostTitle title={blogPost.title} />
      <BlogPostCategories categories={blogPost.categories} />
      <BlogPostTags tags={blogPost.tags} />
      <BlogPostBody body={blogPost.body} />
    </div>
  );
}
