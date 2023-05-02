import { useAppSelector } from "../redux/hooks/hooks";
import { steps } from "./forms/forms";

const stepsName = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export default function Sidebar() {
  const stepNumbers = Array(steps).fill(0);

  return (
    <div className="flex h-[172px] justify-center gap-4 bg-sidebar-sm bg-cover bg-no-repeat lg:h-full lg:min-w-[274px] lg:flex-col lg:justify-start lg:gap-8 lg:rounded-xl lg:bg-sidebar-lg lg:p-9">
      {stepNumbers.map((_, index) => (
        <SidebarStep key={index} stepNumber={index} />
      ))}
    </div>
  );
}

function SidebarStep({ stepNumber }: { stepNumber: number }) {
  const formState = useAppSelector((state) => state.form);
  const style =
    stepNumber === formState.step
      ? "bg-primary-very-light text-primary-dark"
      : "border border-white text-white";

  return (
    <div className="items-center gap-4 lg:flex">
      <div
        className={`${style} grid h-9 w-9 translate-y-7 place-items-center rounded-full lg:translate-y-0`}
      >
        <div>{stepNumber + 1}</div>
      </div>
      <div className="hidden text-white lg:block">
        <h3 className="text-xs opacity-80">STEP {stepNumber + 1}</h3>
        <p className="text-sm font-medium tracking-wider">
          {stepsName[stepNumber]}
        </p>
      </div>
    </div>
  );
}
