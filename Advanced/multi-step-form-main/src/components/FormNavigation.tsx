import { formActions } from "../redux/formSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { steps } from "./forms/forms";

export default function FormNavigation() {
  const formState = useAppSelector((state) => state.form);
  const dispatch = useAppDispatch();
  const style = formState.step < steps - 1 ? "bg-primary-dark" : "bg-primary";

  if (formState.isCompleted) return null;

  function handleNextClick(e: React.MouseEvent) {
    e.preventDefault();

    if (formState.step === 0) {
      const { name, email, phoneNumber } = formState;
      const errors = getErrors(name.value, email.value, phoneNumber.value);
      if (errors.length > 0) {
        errors.forEach((error) => dispatch(formActions.setError(error)));
        return;
      }
    }

    if (formState.step === steps - 1) {
      const userData = JSON.stringify(formState);
      localStorage.setItem("USERDATA", userData);
    }

    dispatch(formActions.next());
  }

  function handleBackClick(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(formActions.back());
  }

  return (
    <div className="fixed bottom-0 flex w-full bg-white p-4 lg:static lg:px-20">
      {formState.step > 0 && (
        <button
          className="font-medium text-neutral-400 hover:text-primary-dark"
          onClick={handleBackClick}
        >
          Go Back
        </button>
      )}
      <button
        className={`${style} ml-auto rounded px-4 py-2 text-white hover:opacity-80 lg:rounded-md lg:px-6 lg:py-3`}
        onClick={handleNextClick}
      >
        {formState.step < steps - 1 ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
}

function getErrors(name: string, email: string, phoneNumber: string) {
  const nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNumberReg =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const errors: Array<string> = [];
  if (!nameReg.test(name)) {
    errors.push("name");
  }
  if (!emailReg.test(email)) {
    errors.push("email");
  }
  if (!phoneNumberReg.test(phoneNumber)) {
    errors.push("phoneNumber");
  }
  return errors;
}
