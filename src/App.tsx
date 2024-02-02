import Main from '@/components/Layout/Main/Main';
import Layout from '@/components/Layout/Layout/Layout';
import BlogPost from '@/components/Layout/BlogPost/BlogPost';
import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';

const BlogPosts: BlogPostType[] = [
  {
    title: 'My First Blog Post',
    categories: ['JavaScript', 'TypeScript'],
    tags: ['React', 'Next.js'],
    body: 'This is the body of my first blog post. It is really interesting and I hope you like it!',
  },
  {
    title: 'My Second Blog Post',
    categories: ['JavaScript', 'TypeScript'],
    tags: ['React', 'Next.js'],
    body: 'This is the body of my second blog post. It is really interesting and I hope you like it!',
  },
  {
    title: 'My Third Blog Post',
    categories: ['JavaScript', 'TypeScript'],
    tags: ['React', 'Next.js'],
    body: 'This is the body of my third blog post. It is really interesting and I hope you like it!',
  },
];

export default function Home() {
  return (
    <Layout>
      <Main className={`flex flex-col gap-4`}>
        {BlogPosts.map((blogPost, index) => (
          <BlogPost key={index} blogPost={blogPost} />
        ))}
      </Main>
    </Layout>
  );
}
