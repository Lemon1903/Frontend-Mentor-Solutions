import FormContainer from "./components/FormContainer";
import FormNavigation from "./components/FormNavigation";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="relative h-screen bg-neutral-200 lg:flex lg:h-[600px] lg:w-[925.5px] lg:rounded-2xl lg:bg-white lg:p-4 lg:shadow-lg">
      <Sidebar />
      <form className="flex flex-col justify-between lg:w-full">
        <FormContainer />
        <FormNavigation />
      </form>
    </div>
  );
}
