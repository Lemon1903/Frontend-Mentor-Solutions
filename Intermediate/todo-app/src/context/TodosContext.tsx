import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface ITodosContext {
  changeFilter: (filter: TFilter) => void;
  setTodos: (todos: ITodo[]) => void;
  addTodo: (todo: ITodo) => void;
  removeTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  clearCompleted: () => void;
}

const TodosContext = createContext<ITodo[]>([]);
const FilterContext = createContext<TFilter>("All");
const ActionsContext = createContext<ITodosContext>({
  changeFilter: () => {},
  setTodos: () => {},
  addTodo: () => {},
  removeTodo: () => {},
  toggleComplete: () => {},
  clearCompleted: () => {},
});

function TodosProvider({ children }: { children: React.ReactNode }) {
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);
  const [todos, setTodos] = useState<ITodo[]>(storedTodos);
  const [filter, setFilter] = useState<TFilter>("All");

  useEffect(() => {
    setStoredTodos(todos);
  }, [todos]);

  function addTodo(todo: ITodo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  function changeFilter(filter: TFilter) {
    setFilter(filter);
  }

  function toggleComplete(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  return (
    <TodosContext.Provider value={todos}>
      <FilterContext.Provider value={filter}>
        <ActionsContext.Provider
          value={{
            changeFilter,
            setTodos,
            addTodo,
            removeTodo,
            toggleComplete,
            clearCompleted,
          }}
        >
          {children}
        </ActionsContext.Provider>
      </FilterContext.Provider>
    </TodosContext.Provider>
  );
}

export interface ITodo {
  id: string;
  body: string;
  isCompleted: boolean;
}

export type TFilter = "All" | "Active" | "Completed";

export function useTodos() {
  return useContext(TodosContext);
}

export function useActions() {
  return useContext(ActionsContext);
}

export function useFilter() {
  return useContext(FilterContext);
}

export default TodosProvider;
