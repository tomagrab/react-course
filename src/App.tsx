import Main from '@/components/Layout/Main/Main';
import Layout from '@/components/Layout/Layout/Layout';
import BlogPost from '@/components/Layout/BlogPost/BlogPost';

export default function Home() {
  return (
    <Layout>
      <Main>
        <BlogPost />
      </Main>
    </Layout>
  );
}
