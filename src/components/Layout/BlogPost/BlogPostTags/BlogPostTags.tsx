import { BlogPostTagType } from '@/lib/Types/BlogPost/BlogPostTagType/BlogPostTagType';

type BlogPostTagsProps = {
  tags: BlogPostTagType[];
};

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div>
      <h3 className={`text-lg font-bold`}>Tags</h3>
      {tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}
