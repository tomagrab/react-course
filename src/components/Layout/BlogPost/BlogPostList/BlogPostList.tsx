import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import BlogPost from '@/components/Layout/BlogPost/BlogPost';
import { Link } from 'react-router-dom';

type BlogPostListProps = {
  BlogPosts: BlogPostType[];
};

export default function BlogPostList({ BlogPosts }: BlogPostListProps) {
  return (
    <div className={`flex flex-col gap-4 `}>
      {BlogPosts.map(BlogPostContent => (
        <Link
          key={BlogPostContent.id}
          to={`/blogs/${BlogPostContent.id}`}
          className={`rounded transition duration-300 ease-in-out hover:scale-95 hover:bg-slate-200`}
        >
          <BlogPost blogPost={BlogPostContent} />
        </Link>
      ))}
    </div>
  );
}
