import Icons from "../assets";
import { useAppSelector } from "../redux/hooks/hooks";
import { forms } from "./forms/forms";

export default function FormContainer() {
  const formState = useAppSelector((state) => state.form);
  const currentForm = forms[formState.step];
  const margin = formState.isCompleted ? "lg:my-auto" : "";

  return (
    <div
      className={`${margin} mx-4 grid translate-y-[-72px] rounded-xl bg-white px-6 py-8 text-neutral-400 shadow-lg lg:translate-y-0 lg:px-16 lg:shadow-none`}
    >
      {formState.isCompleted ? (
        <div className="grid place-items-center gap-2 py-10 text-center lg:gap-4">
          <img
            className="mb-4 h-14 w-14 lg:h-auto lg:w-auto"
            src={Icons.Thankyou}
          />
          <h1 className="text-2xl font-bold leading-tight text-primary-dark lg:text-[2rem]">
            Thank you!
          </h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold leading-tight text-primary-dark lg:text-[2rem]">
            {currentForm.header}
          </h1>
          <p className="mt-2 pr-2">{currentForm.description}</p>
          {currentForm.form}
        </>
      )}
    </div>
  );
}
