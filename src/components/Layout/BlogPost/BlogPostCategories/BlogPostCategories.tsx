import { BlogPostCategoryType } from '@/lib/Types/BlogPost/BlogPostCategoryType/BlogPostCategoryType';

type BlogPostCategoriesProps = {
  categories: BlogPostCategoryType[];
};

export default function BlogPostCategories({
  categories,
}: BlogPostCategoriesProps) {
  return (
    <div>
      {categories.map(category => (
        <div key={category}>{category}</div>
      ))}
    </div>
  );
}
