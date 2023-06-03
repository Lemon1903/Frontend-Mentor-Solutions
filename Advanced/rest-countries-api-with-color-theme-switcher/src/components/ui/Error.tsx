import { Link } from "react-router-dom";
import { PrimaryButton } from "./PrimaryButton";

interface IErrorProps {
	message: string;
	cause: string;
}

export default function Error({ message, cause }: IErrorProps) {
	const status = message !== "Failed to fetch" ? "404 - " : "";

	return (
		<div className="flex flex-col flex-1 items-center justify-center text-center">
			<h1 className="text-9xl font-bold">Oops!</h1>
			<div className="my-4">
				<p className="text-lg font-bold uppercase">
					{status}{message}
				</p>
				<p className="max-w-prose">{cause}</p>
			</div>
			<Link to="/">
				<PrimaryButton className="px-5 py-3">
					Go back to countries
				</PrimaryButton>
			</Link>
		</div>
	);
}
