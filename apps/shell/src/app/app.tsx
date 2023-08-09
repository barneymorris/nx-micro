import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Route, Routes } from 'react-router-dom';

const TodoList = React.lazy(() => import('todo-list/Module'));
const TodoPage = React.lazy(() => import('todo-page/Module'));

const queryClient = new QueryClient();

export function App() {
  return (
    <React.Suspense fallback={null}>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/id/:id" element={<TodoPage />} />
        </Routes>
      </QueryClientProvider>
    </React.Suspense>
  );
}

export default App;
