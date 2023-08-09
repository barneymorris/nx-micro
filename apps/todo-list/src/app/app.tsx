import axios from 'axios';
import { useQuery } from 'react-query';
import { TodoItem } from '@./ui-components';
import { TTodo } from '@./types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export function App() {
  const { isLoading, isError, data } = useQuery<TTodo[]>({
    queryKey: 'get-todos',
    queryFn: () => {
      return axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.data);
    },
  });

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      return () => {
        navigate(`/id/${id}`);
      };
    },
    [navigate]
  );

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <p>something went wrong while fetching todos</p>;
  }

  return (
    <div>
      {data?.map((item) => {
        return (
          <TodoItem key={item.id} onClick={handleClick(item.id)} id={item.id}>
            <strong>{item.title}</strong>
            <br />
            <p>{item.body}</p>
          </TodoItem>
        );
      })}
    </div>
  );
}

export default App;
