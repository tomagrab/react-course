import { BlogPostBodyType } from '@/lib/Types/BlogPost/BlogPostBodyType/BlogPostBodyType';

type BlogPostBodyProps = {
  body: BlogPostBodyType;
};

export default function BlogPostBody({ body }: BlogPostBodyProps) {
  return <div>{body}</div>;
}
