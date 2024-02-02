import { BlogPostBody } from '@/lib/Types/BlogPost/BlogPostBody/BlogPostBody';

type BlogPostBodyProps = {
  body: BlogPostBody;
};

export default function BlogPostBody({ body }: BlogPostBodyProps) {
  return <div>{body}</div>;
}
