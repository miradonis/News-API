import { useEffect, useState } from 'react';
import secretsAPI from '../../secretsAPI/secrets.json';
import './CreateOption.css';


const countryArr = [];
let remove = [];

const CreateOption = () => {

        const [countries, setCountry] = useState([]);

        useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=${secretsAPI.key}`)
        .then(res => res.json())
        .then((element) => {
            // console.log(element);

            element.sources.map((item) => {
                setCountry(countries.push(item.country));
                countryArr.push(item.country);
            })
            // console.log(countryArr);

            remove = Array.from(new Set(countryArr));
            console.log(remove);
        })

    }, []);

    return (
        <article>
            <p>Wähle ein Land</p>
            <select>
                {
                    remove.map((item, index) => {
                        return(
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </article>
    )
}

export default CreateOption;