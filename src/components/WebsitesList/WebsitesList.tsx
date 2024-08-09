import WebsitesItem from "../WebsitesItem/WebsitesItem";
import { List } from "./WebsitesList.styled";

export default function WebsitesList({websites}:{websites:any} ) {

    return (
      <List>
          {websites.map(({ body, id, time }) => <WebsitesItem key={id} time={time} title={body.title} description={body.description} url={body.url} img={body.img} />
          )}
            </List>
  )
}
