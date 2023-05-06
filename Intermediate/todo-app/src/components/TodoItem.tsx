import { motion, Reorder, useMotionValue } from "framer-motion";
import { useState } from "react";
import remove from "../assets/images/icon-cross.svg";
import { ITodo, useActions } from "../context/TodosContext";
import useDragStyle from "../hooks/useDragStyle";

export default function TodoItem({ todo }: { todo: ITodo }) {
  const actions = useActions();
  const y = useMotionValue(0);
  const dragStyle = useDragStyle(y);
  const [cursor, setCursor] = useState("cursor-grab");
  const decoration = todo.isCompleted ? "line-through text-muted" : "";

  function changeCursor() {
    setCursor(cursor === "cursor-grab" ? "cursor-grabbing" : "cursor-grab");
  }

  return (
    <Reorder.Item value={todo} style={{ ...dragStyle, y }}>
      <motion.div
        className={`${cursor} group flex items-center border-b border-muted px-5 py-3 text-primary lg:px-8 lg:py-5 lg:text-lg`}
        initial={{ x: 75, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 75, opacity: 0 }}
        transition={{ bounce: 0 }}
        onPointerDown={changeCursor}
        onPointerUp={changeCursor}
      >
        <input
          className="relative h-6 min-w-check cursor-pointer appearance-none rounded-full border border-muted bg-center bg-no-repeat after:absolute after:inset-0 after:m-px after:rounded-full after:bg-center after:bg-no-repeat after:content-[''] checked:border-0 checked:after:m-0 checked:after:bg-check hover:bg-check hover:after:bg-foreground"
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => actions.toggleComplete(todo.id)}
          onPointerDownCapture={(e) => e.stopPropagation()}
        />
        <p className={`${decoration} mx-3 mt-1.5 min-w-0 flex-grow lg:mx-5`}>
          {todo.body}
        </p>
        <button
          className="min-w-remove scale-75 group-hover:block lg:hidden"
          onClick={() => actions.removeTodo(todo.id)}
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <img src={remove} alt="remove" />
        </button>
      </motion.div>
    </Reorder.Item>
  );
}
