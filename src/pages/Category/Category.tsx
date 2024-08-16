import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { websiteLinks } from "../../data/websiteLinks";
import WebsitesList from "../../components/WebsitesList/WebsitesList";
import { Container, Section } from "../../styles/global";
import MainTitle from "../../components/MainTitle/MainTitle";

export default function Category() {
  //принимать все ссылки и данные по ним -Ю сортировать по имени маршрута и айди, выдавать список совпадений
  const [websites, setWebsites] = useState<Object[] | []>([]);

  /* finding page category name */
  const pageId = useParams();
  const { categoryId } = pageId;

  /* sort weblinks objects which category match the page category name. Depends on refreshing page category name */
  useEffect(() => {
    setWebsites([]);
    websiteLinks.filter((item) => item.category === categoryId ? setWebsites((prevState) => [...prevState, item]) : null);


  }, [pageId]); //sort data and write to state

  const text = `Websites related to ${categoryId} category`

  return (

    <>
      {
        websites.length !== 0 &&
        
        <Section>
          <Container>
            <MainTitle text={text} page={"category"} />
            <WebsitesList websites={websites} />
          </Container>
          </Section>
       
      }
    </>)
}
