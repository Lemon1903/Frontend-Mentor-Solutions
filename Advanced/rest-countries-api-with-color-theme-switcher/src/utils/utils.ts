export async function fetcher(url: string) {
	const response = await fetch(url);

	if (response.statusText === "Not Found") {
		throw new Error("Country Not Found", {
			cause: "The country you specified doesn't exist. Maybe you mispelled something?",
		});
	}

	if (!response.ok) {
		throw new Error("Page Not Found", {
			cause: "Sorry, the page you are looking for doesn't exist. The page might have been removed, had its name changed, or is currently unavailable."
		})
	}

	const data = await response.json();
	return data;
}

export function formatNumber(population: number) {
	return population.toLocaleString("en-US");
}

export function trimSpaces(str: string) {
	return str.replaceAll(" ", "");
}

export function joinWithComma(array: Array<string>) {
	if (array.length > 0) {
		return array.join(", ");
	}
	return "None";
}

export function generateSequence(length: number) {
	const arr: Array<number> = [];
	for (let i = 0; i < length; i++) {
		arr.push(i);
	}
	return arr;
}
