import { BlogPostCategoryType } from '@/lib/Types/BlogPost/BlogPostCategoryType/BlogPostCategoryType';

type BlogPostCategoriesProps = {
  categories: BlogPostCategoryType[];
};

export default function BlogPostCategories({
  categories,
}: BlogPostCategoriesProps) {
  return (
    <div>
      <h3 className={`text-lg font-bold`}>Categories</h3>
      {categories.map(category => (
        <div key={category}>{category}</div>
      ))}
    </div>
  );
}
