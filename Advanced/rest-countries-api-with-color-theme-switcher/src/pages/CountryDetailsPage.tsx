import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import CountryDetails from "../components/CountryDetails";
import Error from "../components/ui/Error";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { ICountryFull } from "../types";
import { fetcher } from "../utils/utils";

export default function CountryDetailsPage() {
  const { name } = useParams();
  const { data, isLoading, error } = useSWR<Array<ICountryFull>, Error>(
    `https://restcountries.com/v3.1/name/${name}?fullText=true;fields=name,flags,population,region,capital,subregion,currencies,borders,tld,languages`,
    (url) => fetcher(url)
  );

  if (error) {
    return <Error message={error.message} cause={error.cause as string} />;
  }

  return (
    <div className="space-y-16 py-4 max-md:px-4">
      <Link to="/">
        <PrimaryButton className="gap-3 px-8 py-2">
          <BsArrowLeft size={18} />
          Back
        </PrimaryButton>
      </Link>

      {isLoading && <CountryDetails.Loading />}
      {data && <CountryDetails {...data[0]} />}
    </div>
  );
}
