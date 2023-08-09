import { create } from 'zustand';

type State = {
  completedTodoIds: number[];
};

type Actions = {
  setCompletedTodo: (id: number) => void;
};

export const useCompletedTodosStore = create<State & Actions>((set) => ({
  completedTodoIds: [],
  setCompletedTodo: (id: number) =>
    set((state) => {
      const copy = [...state.completedTodoIds];
      copy.push(id);

      return {
        completedTodoIds: copy,
      };
    }),
}));
