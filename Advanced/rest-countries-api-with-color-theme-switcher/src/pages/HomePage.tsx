import Countries from "../components/Countries";
import Filter from "../components/Filter";
import FilterProvider from "../context/FilterContext";

export default function HomePage() {
	return (
		<FilterProvider>
      <Filter />
      <Countries />
    </FilterProvider>
	)
}
