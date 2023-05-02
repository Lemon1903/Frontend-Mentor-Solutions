import React from "react";
import { formActions } from "../../redux/formSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

interface IInputFieldProps {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  errorMessage: string;
}

const fields = [
  {
    id: "name",
    name: "Name",
    placeholder: "e.g. Stephen King",
  },
  {
    id: "email",
    name: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
  },
  {
    id: "phoneNumber",
    name: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
  },
];

export default function PersonalDetailsForm() {
  const formState = useAppSelector((state) => state.form);

  return (
    <div className="lg:mt-2">
      {fields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={formState[field.id].value}
          errorMessage={formState[field.id].error}
        />
      ))}
    </div>
  );
}

function InputField(props: IInputFieldProps) {
  const { id, name, placeholder, value, errorMessage } = props;
  const dispatch = useAppDispatch();
  const border = errorMessage ? "border-secondary" : "border-neutral-300";

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const args = [e.target.id, e.target.value];
    dispatch(formActions.setUserDetail(args));
  }

  return (
    <div className="mt-3.5 grid gap-1 lg:mt-7">
      <label className="text-xs font-medium text-primary-dark lg:text-sm">
        {name}
        {errorMessage !== "" && (
          <span className="float-right font-bold text-secondary">
            {errorMessage}
          </span>
        )}
      </label>
      <input
        className={`${border} w-full rounded border px-4 py-2 text-primary-dark outline-none focus:border-primary`}
        id={id}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
