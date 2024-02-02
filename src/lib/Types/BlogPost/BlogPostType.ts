import { BlogPostTitleType } from '@/lib/Types/BlogPost/BlogPostTitleType/BlogPostTitleType';
import { BlogPostBodyType } from '@/lib/Types/BlogPost/BlogPostBodyType/BlogPostBodyType';
import { BlogPostCategoryType } from '@/lib/Types/BlogPost/BlogPostCategoryType/BlogPostCategoryType';
import { BlogPostTagType } from '@/lib/Types/BlogPost/BlogPostTagType/BlogPostTagType';
import { BlogPostIDType } from '@/lib/Types/BlogPost/BlogPostIDType/BlogPostIDType';

export type BlogPostType = {
  id: BlogPostIDType;
  title: BlogPostTitleType;
  body: BlogPostBodyType;
  categories: BlogPostCategoryType[];
  tags: BlogPostTagType[];
};
