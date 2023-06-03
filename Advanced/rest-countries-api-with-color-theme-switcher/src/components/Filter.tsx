import { Listbox, Transition } from "@headlessui/react";
import { ChangeEvent, Fragment } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useFilter, useFilterDispatch } from "../context/FilterContext";
import { ActionTypes, TRegion } from "../types";
import { PrimaryButton } from "./ui/PrimaryButton";

const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];

export default function Filter() {
	const filter = useFilter();
	const dispatch = useFilterDispatch();

	function setRegion(region: TRegion) {
		dispatch({ type: ActionTypes.SET_REGION, region: region });
	}

	function setSearchValue(e: ChangeEvent<HTMLInputElement>) {
		dispatch({ type: ActionTypes.SET_SEARCH_VALUE, searchValue: e.target.value })
	}

	return (
		<div className="flex flex-wrap justify-between gap-12">
			<div className="relative w-full lg:w-1/2 xl:w-2/6">
				<FaSearch
					className="absolute inset-y-0 left-8 my-auto fill-hint"
					size={18}
				/>
				<input
					className="w-full rounded-md bg-foreground py-5 pl-20 pr-4 text-sm shadow-md outline-none placeholder:text-hint"
					placeholder="Search for a country..."
					value={filter.searchValue}
					onChange={setSearchValue}
				/>
			</div>

			<Listbox value={filter.region} onChange={setRegion}>
				<div className="relative h-min text-sm">
					<Listbox.Button
						as={PrimaryButton}
						className="w-48 justify-between px-6 py-4"
					>
						{({ open }) => (
							<>
								{filter.region} {open ? <BsChevronUp /> : <BsChevronDown />}
							</>
						)}
					</Listbox.Button>
					<Transition
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="scale-y-0 origin-top opacity-0"
						enterTo="scale-y-100 origin-top opacity-100"
						leave="ease-in duration-200"
						leaveFrom="scale-y-100 origin-top opacity-100"
						leaveTo="scale-y-0 origin-top opacity-0"
					>
						<Listbox.Options className="z-10 absolute inset-x-0 top-full mt-1.5 grid gap-2 rounded-md bg-foreground py-4 shadow-md outline-none">
							{regions.map((region) => (
								<Listbox.Option
									className="select-none px-6 text-left ui-not-selected:text-main/50"
									key={region}
									value={region}
								>
									<span className="ui-active:text-main">{region}</span>
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
}
