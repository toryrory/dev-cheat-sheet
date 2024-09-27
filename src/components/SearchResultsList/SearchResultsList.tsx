import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import { useState, useEffect } from "react";
import { shortUUID } from "../../utils/utils";
import { searchWebsites } from "../../utils/utils";
import { ListContainer } from "./SearchResultsList.styled";

export default function SearchResultsLits({ searchData, modalOpen }: { searchData: string, modalOpen: boolean }) {
  const [resultData, setResultData] = useState([]);
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    setResultData([]);
  }, [modalOpen])

  useEffect(() => {
    if (!searchData) {
      setResultData([]);
      return;
    }

    setResultData([]);
    setNoResults(false);

    const results = searchWebsites(searchData);

    if (results.length === 0) {
      setNoResults(true);
    } else {
      setTimeout(() => {
        setResultData(results);
      }, 1000);
    }
  }, [searchData])

  return (
    <ListContainer>
      <ul>
        {/* добавить скролл */}
        {searchData && resultData && resultData.map(({ id, category, body }) => <SearchResultsItem key={shortUUID()} id={id} title={body.title} category={category} url={body.url} />)}
        {noResults && <p>No results...</p>}
      </ul>
    </ListContainer>
  )
}
