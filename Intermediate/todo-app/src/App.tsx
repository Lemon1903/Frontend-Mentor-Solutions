import Hint from "./components/Hint";
import Header from "./container/Header";
import Main from "./container/Main";
import TodosProvider from "./context/TodosContext";

export default function App() {
  return (
    <TodosProvider>
      <div className="space-y-4 overflow-hidden px-6 py-10 transition-[background-color] duration-300 lg:min-w-[40rem] lg:px-8 lg:py-16">
        <Header />
        <Main />
        <Hint />
      </div>
    </TodosProvider>
  );
}
