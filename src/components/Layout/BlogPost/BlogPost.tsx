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
    <div className={`flex justify-between`}>
      <div className={`flex flex-col gap-2`}>
        <BlogPostTitle title={blogPost.title} />
        <BlogPostBody body={blogPost.body} />
      </div>
      <div className={`flex flex-col gap-2`}>
        <BlogPostCategories categories={blogPost.categories} />
        <BlogPostTags tags={blogPost.tags} />
      </div>
    </div>
  );
}
