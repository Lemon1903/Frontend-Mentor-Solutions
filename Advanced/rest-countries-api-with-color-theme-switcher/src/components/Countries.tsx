import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { useFilter } from "../context/FilterContext";
import usePagination from "../hooks/usePagination";
import { ICountryCard } from "../types";
import { fetcher, generateSequence, trimSpaces } from "../utils/utils";
import Card from "./ui/Card";
import Error from "./ui/Error";
import { PrimaryButton } from "./ui/PrimaryButton";

export default function Countries() {
  /* States */
  const filter = useFilter();
  const { data, isLoading, error } = useSWR<Array<ICountryCard>, Error>(
    "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
    (url) => fetcher(url)
  );
  const countries = useMemo(() => filterCountries(data), [data, filter]) ?? [];
  const [itemsPerPage, pagesLength, pageNumber, setPageNumber] = usePagination(
    countries.length
  );

  /* Error handling */
  if (error) {
    return <Error message={error.message} cause={error.cause as string} />;
  }

  /* Functions */
  function filterCountries(data: Array<ICountryCard> | undefined) {
    const searchValue = filter.searchValue.toLowerCase();

    const filteredCountries = data?.filter((country) => {
      const inCapitals = checkInCapitals(country.capital, searchValue);
      const inRegion = country.region.includes(filter.region);
      const isAllFilter = ["All", "Filter by Region"].includes(filter.region);
      const inName = country.name.common.toLowerCase().includes(searchValue);

      return (inCapitals || inName) && (inRegion || isAllFilter) && country;
    });

    return filteredCountries?.sort((a, b) =>
      a.name.common.localeCompare(b.name.common)
    );
  }

  function getItemsPerPage() {
    const start = pageNumber * itemsPerPage;
    return countries.slice(start, start + itemsPerPage);
  }

  function getActiveStyle(num: number) {
    return pageNumber === num && "scale-110 brightness-hover";
  }

  return (
    <div className="space-y-16">
      <motion.div
        className="grid justify-center gap-8 sm:grid-cols-countries lg:gap-16"
        layout
      >
        <AnimatePresence>
          {isLoading &&
            generateSequence(itemsPerPage).map((num) => (
              <Card.Loading key={num} />
            ))}
          {getItemsPerPage().map((country) => (
            <Link to={`/${country.name.common}`} key={country.name.common}>
              <Card {...country} />
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mx-4 flex flex-wrap justify-center gap-6 md:mx-8 xl:mx-0">
        {pagesLength > 1 &&
          generateSequence(pagesLength).map((num) => (
            <PrimaryButton
              className={`${getActiveStyle(
                num
              )} aspect-square w-10 hover:scale-110 sm:w-12 md:w-16`}
              key={num}
              onClick={() => setPageNumber(num)}
            >
              <span className="m-auto">{num + 1}</span>
            </PrimaryButton>
          ))}
      </div>
    </div>
  );
}

function checkInCapitals(capitals: Array<string>, value: string) {
  const searchValues = trimSpaces(value).split(",");
  let ret = false;

  capitals.forEach((capital) => {
    searchValues.forEach((searchValue) => {
      if (capital.toLowerCase().includes(searchValue)) ret = true;
    });
  });
  return ret;
}
