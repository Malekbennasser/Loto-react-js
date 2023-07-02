import { useState } from "react";
import "./App.css";
function App() {
  let [tirage, setTirage] = useState(0);
  let [historiqueTirage, setHistoriqueTirage] = useState([]);
  const [bigNumber, setBigNumber] = useState(0);
  function randomNumber() {
    return Math.floor(Math.random() * 99);
  }

  const handleClick = () => {
    setTirage(randomNumber(0, 99));

    if (historiqueTirage.includes(tirage) === true) {
      setTirage(randomNumber(0, 99));
    } else {
      setHistoriqueTirage((oldArray) => [tirage, ...oldArray]);
    }
    if (historiqueTirage.length > 0) {
      handleBigNumber();
    }
  };
  function handleChange(e) {
    setBigNumber(e.target.value);
  }

  const renderMyArray = () => {
    return historiqueTirage.map((historique) => {
      return <li key={historique}>{historique}</li>;
    });
  };

  const handleBigNumber = () => {
    let largest = 0;

    for (let i = 0; i < historiqueTirage.length; i++) {
      if (largest < historiqueTirage[i]) {
        largest = historiqueTirage[i];
      }
    }
    setBigNumber(largest);
  };

  return (
    <>
      <div className="container">
        <button onClick={handleClick}>Tirer au sort</button>
        <p>Resultat:{tirage}</p>
        <input onChange={handleChange}></input>
        {bigNumber > 0 ? (
          <h5>Votre plus gros numéro est le {bigNumber}</h5>
        ) : (
          <h5>Vous navez pas de numéros</h5>
        )}
        <p>Historique:{renderMyArray()}</p>
      </div>
    </>
  );
}

export default App;
