import { TFilter, useActions, useFilter } from "../context/TodosContext";

export default function Filter() {
  const filter = useFilter();
  const actions = useActions();
  const accents = { All: "", Active: "", Completed: "" };
  accents[filter] = "text-accent";

  function handleClick(newFilter: TFilter) {
    return () => {
      actions.changeFilter(newFilter);
    };
  }

  return (
    <div className="space-x-4 font-bold">
      <button
        className={`${accents.All} hover:text-primary`}
        onClick={handleClick("All")}
      >
        All
      </button>
      <button
        className={`${accents.Active} hover:text-primary`}
        onClick={handleClick("Active")}
      >
        Active
      </button>
      <button
        className={`${accents.Completed} hover:text-primary`}
        onClick={handleClick("Completed")}
      >
        Completed
      </button>
    </div>
  );
}
