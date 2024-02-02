import { useEffect, useState } from 'react';
import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import Main from '@/components/Layout/Main/Main';
import Layout from '@/components/Layout/Layout/Layout';
import BlogPostList from '@/components/Layout/BlogPost/BlogPostList/BlogPostList';

export default function Home() {
  const [blogs, setBlogs] = useState<BlogPostType[]>([
    {
      id: 1,
      title: 'My First Blog Post',
      categories: ['JavaScript', 'TypeScript'],
      tags: ['React', 'Next.js'],
      body: 'This is the body of my first blog post. It is really interesting and I hope you like it!',
    },
    {
      id: 2,
      title: 'My Second Blog Post',
      categories: ['JavaScript', 'TypeScript'],
      tags: ['React', 'Next.js'],
      body: 'This is the body of my second blog post. It is really interesting and I hope you like it!',
    },
    {
      id: 3,
      title: 'My Third Blog Post',
      categories: ['JavaScript', 'TypeScript'],
      tags: ['React', 'Next.js'],
      body: 'This is the body of my third blog post. It is really interesting and I hope you like it!',
    },
  ]);

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('Blogs:', blogs);
  }, [blogs]);

  return (
    <Layout>
      <Main>
        <BlogPostList BlogPosts={blogs} handleDelete={handleDelete} />
      </Main>
    </Layout>
  );
}
