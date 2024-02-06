import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from '@/components/Layout/Layout/Layout';
import Home from '@/Routes/Home/Home';
import About from '@/Routes/About/About';
import New from '@/Routes/New/New';
import BlogDetails from '@/Routes/Blogs/BlogDetails/BlogDetails';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/blogs/:id`} element={<BlogDetails />} />
          <Route path={`/about`} element={<About />} />
          <Route path={`/new`} element={<New />} />
          <Route path={`*`} element={<h1>Not Found</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}
