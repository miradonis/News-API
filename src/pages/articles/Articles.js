import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import secretsAPI from "../../secretsAPI/secrets.json";
import "./Articles.css";

const Articles = () => {
  const params = useParams();
  const id = params.id;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=br&apiKey=${secretsAPI.key}`
    )
      .then((res) => res.json())
      .then((products) => {
        setProducts(products.articles);
      });
  }, []);

  return (
    <section>
      {products.map((item, index) => {
        // countryArr.push(item.country);
        return (
          <div className="articles" key={index}>
            <div className="picBox">
              <img src={item.urlToImage} />
            </div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.publishedAt}</p>
            <a href={item.url}>Read more</a>
          </div>
        );
      })}
    </section>
  );
};
export default Articles;
