import AddOnsForm from "./AddOnsForm";
import ConfirmationForm from "./ConfirmationForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import PlanForm from "./PlanForm";

interface IForm {
  header: string;
  description: string;
  form: JSX.Element;
}

export const forms: IForm[] = [
  {
    header: "Personal Info",
    description: "Please provide your name, email address, and phone number.",
    form: <PersonalDetailsForm />,
  },
  {
    header: "Select your plan",
    description: "You have the option of monthly or yearly billing.",
    form: <PlanForm />,
  },
  {
    header: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
    form: <AddOnsForm />,
  },
  {
    header: "Finishing up",
    description: "Double-check everything looks OK before confirming.",
    form: <ConfirmationForm />,
  },
];

export const steps = forms.length;
