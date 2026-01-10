import "./App.css";
import "./index.css";
import { useEffect } from "react";
import Navigation from "./Navigation";
import Map from "./Map";
import { useSearchParams } from "react-router";
import useIpData from "./hooks/useIpData";
import Spinner from "./Spinner";
import DetailsBar from "./DetailsBar";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get("query") || "";

  const { data, loading, error } = useIpData(currentQuery);

  const updateQuery = (newQuery) => {
    setSearchParams({ query: newQuery });
  };

  useEffect(() => {
    if (currentQuery === "" && data && data.ip)
      setSearchParams({ query: data.ip });
  }, [data, currentQuery, setSearchParams]);

  return (
    <div className="container">
      <Navigation onSearch={updateQuery}>
        <DetailsBar data={data} loading={loading} error={error} query={currentQuery} />
      </Navigation>
      {loading && !data ? (
        <div className="flex justify-center items-center h-64">
          <Spinner />
        </div>
      ) : (
        <Map data={data} loading={loading} error={error} />
      )}
    </div>
  );
}

export default App;
