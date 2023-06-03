import { PropsWithChildren } from "react";
import DetailField from "../components/ui/DetailField";
import { ICountryFull } from "../types";
import { formatNumber, generateSequence, joinWithComma } from "../utils/utils";
import Borders from "./Borders";
import Skeleton from "./ui/Skeleton";

function Shell({ children }: PropsWithChildren) {
	return (
		<div className="mx-auto grid items-center gap-16 lg:grid-cols-2 xl:gap-32 2xl:max-w-screen-2xl">
			{children}
		</div>
	);
}

export default function CountryDetails({
	name,
	capital,
	currencies,
	flags,
	population,
	region,
	subregion,
	tld,
	borders,
	languages,
}: ICountryFull) {
	const _currencies = Object.values(currencies).map(({ name }) => name);
	const _languages = Object.values(languages);
	const values = Object.values(name.nativeName)[0];
	const nativeName = values ? values.common : "None";

	return (
		<Shell>
			<img
				className="mx-auto max-h-72 w-full shadow-lg sm:max-h-80 sm:max-xl:max-w-lg lg:h-full xl:max-h-[400px]"
				src={flags.png}
				alt={flags.alt}
			/>

			<div className="font-bold">
				<h1 className="text-3xl">{name.common}</h1>
				<div className="mb-12 mt-8 flex flex-col flex-wrap gap-y-2 gap-x-6 sm:max-lg:h-32 xl:mb-16 xl:h-40">
					<DetailField field="Native Name" value={nativeName} />
					<DetailField field="Population" value={formatNumber(population)} />
					<DetailField field="Region" value={region} />
					<DetailField field="Sub Region" value={subregion || "None"} />
					<DetailField field="Capital" value={joinWithComma(capital)} />
					<div className="h-8 sm:hidden" />
					<DetailField field="Top Level Domain" value={joinWithComma(tld)} />
					<DetailField field="Currencies" value={joinWithComma(_currencies)} />
					<DetailField field="Languages" value={joinWithComma(_languages)} />
				</div>

				<div className="flex gap-4 max-xl:flex-wrap">
					<p className="mt-px min-w-max max-lg:w-full">Border Countries:</p>
					<Borders borders={borders} />
				</div>
			</div>
		</Shell>
	);
}

CountryDetails.Loading = () => {
	return (
		<Shell>
			<Skeleton className="mx-auto h-56 w-full sm:h-80 sm:max-xl:max-w-lg xl:h-[400px]" />
			<div>
				<Skeleton className="h-9 w-1/4" />
				<div className="mb-12 mt-8 flex flex-col flex-wrap gap-y-2 sm:max-lg:h-32 xl:mb-16 xl:h-36">
					{generateSequence(9).map((number) =>
						number === 5 ? (
							<div key={number} className="h-8 sm:hidden" />
						) : (
							<Skeleton key={number} className="h-5 w-3/4 sm:w-2/5" />
						)
					)}
				</div>
				<div className="flex flex-col gap-4 xl:flex-row">
					<Skeleton className="h-7 w-1/5" />
					<div className="flex gap-2.5">
						<Skeleton className="h-7 w-24" />
						<Skeleton className="h-7 w-24" />
					</div>
				</div>
			</div>
		</Shell>
	);
};
