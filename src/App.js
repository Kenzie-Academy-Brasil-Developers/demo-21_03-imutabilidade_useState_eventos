// Importações de components, estilização, libs
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

// Declaração do componente Funcional ou Classe
function App() {
  // Lógica do componente

  const [countries, setCountries] = useState([
    {
      country: "Brasil",
      population: "220 milhoes",
      size: "9 milhões de KM",
    },
    {
      country: "Brasil",
      population: "220 milhoes",
      size: "9 milhões de KM",
    },
  ]);

  const [devs, setDevs] = useState([]);

  const [inputName, setInputName] = useState("");

  console.log(inputName);
  //   console.log(countries);

  const addCountry = () => {
    setCountries([
      ...countries,
      {
        country: "Argentina",
        population: "40 milhoes",
        size: "6.5 milhões de KM",
      },
    ]);
    console.log(countries);
  };

  const deleteCountry = (countryName) => {
    const newCountries = countries.filter(
      (country) => country.country !== countryName
    );
    setCountries(newCountries);
    console.log(countries);
  };

  const addDev = () => {
    setDevs([...devs, inputName]);
  };

  return (
    // JSX - HTML que será colocado na tela
    <div className="App">
      <header className="App-header">
        {countries.map((country, index) => {
          return (
            <Card key={country.country} info={country} func={deleteCountry} />
          );
        })}
        <input
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        ></input>
        <ul>
          {devs.map((dev, index) => {
            return <li key={index}>{dev}</li>;
          })}
        </ul>
        <Button
          func={addDev}
          title="Add Dev"
          className="content-button-green"
        />
      </header>
    </div>
  );
}

// Exportação do componente
export default App;
