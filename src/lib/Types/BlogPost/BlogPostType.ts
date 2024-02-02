import { BlogPostTitleType } from '@/lib/Types/BlogPost/BlogPostTitleType/BlogPostTitleType';
import { BlogPostBodyType } from '@/lib/Types/BlogPost/BlogPostBodyType/BlogPostBodyType';
import { BlogPostCategoryType } from '@/lib/Types/BlogPost/BlogPostCategoryType/BlogPostCategoryType';
import { BlogPostTagType } from '@/lib/Types/BlogPost/BlogPostTagType/BlogPostTagType';

export type BlogPostType = {
  title: BlogPostTitleType;
  body: BlogPostBodyType;
  categories: BlogPostCategoryType[];
  tags: BlogPostTagType[];
};
