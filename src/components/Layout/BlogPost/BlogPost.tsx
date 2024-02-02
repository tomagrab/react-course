import BlogPostBody from '@/components/Layout/BlogPost/BlogPostBody/BlogPostBody';
import BlogPostCategories from '@/components/Layout/BlogPost/BlogPostCategories/BlogPostCategories';
import BlogPostTags from '@/components/Layout/BlogPost/BlogPostTags/BlogPostTags';
import BlogPostTitle from '@/components/Layout/BlogPost/BlogPostTitle/BlogPostTitle';

export default function BlogPost() {
  return (
    <div>
      <BlogPostTitle />
      <BlogPostBody />

      <BlogPostCategories />
      <BlogPostTags />
    </div>
  );
}
