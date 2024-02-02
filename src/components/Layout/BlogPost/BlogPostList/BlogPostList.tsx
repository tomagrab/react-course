import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import BlogPost from '@/components/Layout/BlogPost/BlogPost';

type BlogPostListProps = {
  BlogPosts: BlogPostType[];
  handleDelete: (id: number) => void;
};

export default function BlogPostList({
  BlogPosts,
  handleDelete,
}: BlogPostListProps) {
  return (
    <>
      {BlogPosts.map(BlogPostContent => (
        <div key={BlogPostContent.id} className={`flex flex-col gap-4`}>
          <BlogPost blogPost={BlogPostContent} handleDelete={handleDelete} />
        </div>
      ))}
    </>
  );
}
