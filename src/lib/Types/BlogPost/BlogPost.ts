import { BlogPostTitle } from '@/lib/Types/BlogPost/BlogPostTitle/BlogPostTitle';
import { BlogPostBody } from '@/lib/Types/BlogPost/BlogPostBody/BlogPostBody';
import { BlogPostCategory } from '@/lib/Types/BlogPost/BlogPostCategory/BlogPostCategory';
import { BlogPostTag } from '@/lib/Types/BlogPost/BlogPostTag/BlogPostTag';

export type BlogPost = {
  title: BlogPostTitle;
  body: BlogPostBody;
  categories: BlogPostCategory[];
  tags: BlogPostTag[];
};
