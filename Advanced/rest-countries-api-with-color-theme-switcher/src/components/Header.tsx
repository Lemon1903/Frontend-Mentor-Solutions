import { BsMoonFill, BsSunFill } from "react-icons/bs";
import useDarkMode from "../hooks/useDarkMode";

export default function Header() {
	const [enabled, setEnabled] = useDarkMode();

	return (
		<header className="bg-foreground px-4 py-8 drop-shadow-md md:px-16 lg:py-4">
			<div className="mx-1 flex justify-between">
				<p className="font-bold md:text-2xl">Where in the world?</p>
				<button
					className="group flex items-center gap-3"
					onClick={() => setEnabled(!enabled)}
				>
					{enabled ? <BsSunFill /> : <BsMoonFill />}
					<p className="mt-0.5 underline-offset-2 group-hover:underline">
						{enabled ? "Light" : "Dark"} Mode
					</p>
				</button>
			</div>
		</header>
	);
}
