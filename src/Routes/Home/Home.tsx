import { useFetch } from '@/lib/Hooks/UseFetch/UseFetch';
import Main from '@/components/Layout/Main/Main';
import Loading from '@/components/Layout/Loading/Loading';
import BlogPostList from '@/components/Layout/BlogPost/BlogPostList/BlogPostList';
import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';

export default function Home() {
  const { data, isLoading, error } = useFetch<BlogPostType[]>(
    'http://localhost:8000/blogs',
  );
  return (
    <Main>
      {isLoading ? (
        <Loading />
      ) : data && data.length > 0 ? (
        <BlogPostList BlogPosts={data} />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <h2>No blogs to display. Please add a blog post to see it here.</h2>
      )}
    </Main>
  );
}
