import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";
import { useState, useEffect } from "react";
import { websiteLinks } from "../../data/websiteLinks";

export default function SearchResultsLits({ searchData }: { searchData: string }) {
  const [resultData, setResultData] = useState([]);

  /* сделать юзефект который срабатывает когда стейт поиска опен = тру. тогда после первого ввода начинается фильтрация и обработать бновление стейта результатов и добавление карточек*/
  const results = websiteLinks.filter(website => website.body.title.toLowerCase().includes(searchData) || website.body.description.toLowerCase().includes(searchData));
  console.log(results);

  return (
    <div>
      <ul>
        <p>hi</p>
      </ul>
    </div>
  )
}
