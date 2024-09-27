import WebsitesItem from "../WebsitesItem/WebsitesItem";
import { List } from "./WebsitesList.styled";
import { shortUUID } from "../../utils/utils";

export default function WebsitesList({websites}:{websites:any} ) {

    return (
      <List>
          {websites.map(({ body, id, time }) => <WebsitesItem key={shortUUID()} time={time} title={body.title} description={body.description} url={body.url} img={body.img} />
          )}
            </List>
  )
}
