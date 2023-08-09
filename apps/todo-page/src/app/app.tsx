import { TTodo } from '@./types';
import { TodoItem } from '@./ui-components';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export function App() {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery<TTodo>({
    queryKey: ['get-todo', id],
    queryFn: () => {
      return axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.data);
    },
  });

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>something went wrong while fetching todo</h1>;
  }

  return (
    <div>
      <h1>Info about todo:</h1>
      <br />
      <TodoItem id={data?.id || 0}>
        <p>title: {data?.title}</p>
        <p>body: {data?.title}</p>
      </TodoItem>
    </div>
  );
}

export default App;
