import Loading from '@/components/Layout/Loading/Loading';
import { Button } from '@/components/ui/button';
import { useFetch } from '@/lib/Hooks/UseFetch/UseFetch';
import { BlogPostType } from '@/lib/Types/BlogPost/BlogPostType';
import { Trash } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BlogDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch<BlogPostType>(
    `http://localhost:8000/blogs/${id}`,
  );
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:8000/blogs/${data?.id}`, {
        method: 'DELETE',
      });

      navigate('/');
    } catch (error) {
      console.error('Error deleting blog', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <div>{error}</div>
      ) : data ? (
        <article className={`flex justify-between pt-4`}>
          <div className={`flex flex-col justify-between gap-4`}>
            <div>
              <h2 className={`text-xl font-bold text-pink-500`}>
                {data?.title}
              </h2>
              <p>{data?.body}</p>
            </div>
            <div>
              <Button
                variant={`destructive`}
                onClick={() => {
                  handleDelete();
                }}
              >
                <Trash size={24} />
              </Button>
            </div>
          </div>
          <div className={`flex flex-col gap-4`}>
            <h3>Categories</h3>
            {data?.categories.map(category => (
              <span
                key={category}
                className={`mr-2 rounded bg-pink-200 px-2 py-1 text-xs`}
              >
                {category}
              </span>
            ))}

            <h3>Tags</h3>
            {data?.tags.map(tag => (
              <span
                key={tag}
                className={`mr-2 rounded bg-pink-200 px-2 py-1 text-xs`}
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ) : (
        <h2>No blog found with that id</h2>
      )}
    </div>
  );
}
