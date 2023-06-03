import { useEffect, useState } from "react";
import { ICountryName } from "../types";

export default function useBorderNames(borders: Array<string>) {
	const [borderNames, setBorderNames] = useState<Array<string>>([]);

	useEffect(() => {
		const promises = borders.map(
			async (border) => await getNameWithCode(border)
		);
		Promise.all(promises).then(setBorderNames);
	}, [borders]);

	async function getNameWithCode(code: string) {
		const response = await fetch(
			`https://restcountries.com/v3.1/alpha/${code}?fields=name`
		);
		const { name }: ICountryName = await response.json();
		return name.common;
	}

	return borderNames;
}
