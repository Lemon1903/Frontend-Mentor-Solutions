import { ReactComponent as NextButton } from "../../assets/icon-next.svg";
import { ReactComponent as PreviousButton } from "../../assets/icon-previous.svg";

interface IDirectionButtonProps {
  direction: string;
  onClick: (value: number) => void;
}

export default function DirectionButton(props: IDirectionButtonProps) {
  const { direction, onClick } = props;

  function handleClick() {
    onClick(direction === "next" ? 1 : -1);
  }

  return (
    <button
      className="group grid place-items-center rounded-full bg-white w-10 h-10 select-none"
      onClick={handleClick}
    >
      {direction === "next" ? (
        <NextButton className="duration-200 stroke-neutral-very-dark group-hover:stroke-primary-dark" />
      ) : (
        <PreviousButton className="duration-200 stroke-neutral-very-dark group-hover:stroke-primary-dark" />
      )}
    </button>
  );
}
