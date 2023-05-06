import { AnimatePresence, Reorder } from "framer-motion";
import { useRef } from "react";
import Empty from "../components/Empty";
import Filter from "../components/Filter";
import TodoItem from "../components/TodoItem";
import {
  ITodo,
  useActions,
  useFilter,
  useTodos,
} from "../context/TodosContext";

export default function Main() {
  const todos = useTodos();
  const actions = useActions();
  const filter = useFilter();
  const multiplier = useRef(0);

  let filteredTodos: ITodo[];
  let emptyMessage: string;

  switch (filter) {
    case "All":
      filteredTodos = [...todos];
      emptyMessage = "No todos yet";
      break;
    case "Active":
      filteredTodos = todos.filter((todo) => !todo.isCompleted);
      emptyMessage = "No active todos";
      break;
    case "Completed":
      filteredTodos = todos.filter((todo) => todo.isCompleted);
      emptyMessage = "No completed todos";
      break;
    default:
      throw new Error(`There is no filer type ${filter}`);
  }

  if (todos.length > 0) {
    multiplier.current = todos.length;
  }

  function getItemsLeft() {
    const count = todos.length;
    const noun = count > 1 ? "items" : "item";
    return `${count} ${noun} left`;
  }

  function handleCompletedClick() {
    multiplier.current = todos.length;
    actions.clearCompleted();
  }

  return (
    <>
      <div className="overflow-hidden rounded-md bg-foreground text-xs transition duration-300">
        {filteredTodos.length === 0 ? (
          <Empty message={emptyMessage} multiplier={multiplier.current} />
        ) : (
          <Reorder.Group values={todos} onReorder={actions.setTodos}>
            <AnimatePresence>
              {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </AnimatePresence>
          </Reorder.Group>
        )}
        <div className="relative flex h-12 items-center justify-center lg:text-sm">
          <p className="absolute left-5 lg:left-8">{getItemsLeft()}</p>
          <div className="hidden lg:block">
            <Filter />
          </div>
          <button
            className="absolute right-5 hover:text-primary lg:right-8"
            onClick={handleCompletedClick}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <div className="flex h-12 items-center justify-center rounded-md bg-foreground text-sm transition duration-300 lg:hidden">
        <Filter />
      </div>
    </>
  );
}
