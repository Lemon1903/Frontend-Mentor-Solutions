import { Dispatch, SetStateAction } from "react";

export interface ICountryName {
	name: {
		common: string;
		nativeName: { [key: string]: { common: string } };
	};
}

export interface ICountryCard extends ICountryName {
	flags: {
		png: string;
		svg: string;
		alt: string;
	};
	population: number;
	region: string;
	capital: Array<string>;
}

export interface ICountryFull extends ICountryCard {
	subregion: string;
	tld: Array<string>;
	currencies: { [key: string]: { name: string } };
	languages: { [key: string]: string };
	borders: Array<string>;
}

export enum ActionTypes {
	SET_REGION,
	SET_SEARCH_VALUE,
}

export type SetValue<T> = Dispatch<SetStateAction<T>>;

export type TRegion =
	| "Filter by Region"
	| "All"
	| "Africa"
	| "America"
	| "Asia"
	| "Europe"
	| "Oceania";
