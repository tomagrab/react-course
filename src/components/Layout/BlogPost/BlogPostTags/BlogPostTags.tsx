import { BlogPostTagType } from '@/lib/Types/BlogPost/BlogPostTagType/BlogPostTagType';

type BlogPostTagsProps = {
  tags: BlogPostTagType[];
};

export default function BlogPostTags({ tags }: BlogPostTagsProps) {
  return (
    <div>
      {tags.map(tag => (
        <div key={tag}>{tag}</div>
      ))}
    </div>
  );
}
