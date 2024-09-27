import { v4 as uuidv4 } from "uuid";
import { websiteLinks } from "../data/websiteLinks";

/* slice uuid default length(36) to 8 digits for search-list items */
export const shortUUID = () => {
    const uuid8Digits = uuidv4().substring(uuidv4().length - 8);

    return uuid8Digits;
}

/* search websites by its title matched to the search data */
export const searchWebsites = (searchData: string) => {
   return websiteLinks.filter(website => website.body.title.toLowerCase().includes(searchData));

}

