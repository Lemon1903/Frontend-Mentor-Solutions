import React, { useRef } from "react";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import { useActions } from "../context/TodosContext";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const actions = useActions();
  const [enabled, setEnabled] = useDarkMode();
  const inputElement = useRef<HTMLInputElement | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputElement.current && inputElement.current.value) {
      actions.addTodo({
        id: crypto.randomUUID(),
        body: inputElement.current.value,
        isCompleted: false,
      });
      inputElement.current.value = "";
    }
  }

  return (
    <header>
      <div className="flex items-center justify-between">
        <h1 className="text-heading-sm font-bold text-heading lg:text-heading-lg">
          TODO
        </h1>
        <button onClick={() => setEnabled(!enabled)}>
          <img src={enabled ? sun : moon} alt="moon" />
        </button>
      </div>
      <div className="mt-6 flex items-center gap-3 overflow-hidden rounded-md bg-foreground px-5 py-3 duration-300 lg:gap-5 lg:px-8 lg:py-5">
        <div className="h-6 min-w-check rounded-full border border-muted" />
        <form className="w-full" onSubmit={onSubmit}>
          <input
            ref={inputElement}
            className="w-full bg-transparent text-xs font-bold text-primary caret-accent outline-none placeholder:text-secondary lg:text-lg lg:font-normal"
            type="text"
            placeholder="Create a new todo..."
          />
        </form>
      </div>
    </header>
  );
}
