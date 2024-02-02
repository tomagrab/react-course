import { BlogPostTitleType } from '@/lib/Types/BlogPost/BlogPostTitleType/BlogPostTitleType';

type BlogPostTitleProps = {
  title: BlogPostTitleType;
};

export default function BlogPostTitle({ title }: BlogPostTitleProps) {
  return (
    <div>
      <h2 className={`text-xl font-bold`}>{title}</h2>
    </div>
  );
}
