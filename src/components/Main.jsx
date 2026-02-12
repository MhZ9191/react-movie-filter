import { useState, useEffect } from "react";

export default function Main({ films }) {
  //array con i generi dei film senza duplicati
  const generi = films.reduce((acc, ce) => {
    const currentGenere = ce.genre;
    if (!acc.includes(currentGenere)) {
      acc.push(currentGenere);
    }
    return acc;
  }, []);

  //useState
  const [indexSearch, setIndexSearch] = useState(null);
  const [filterList, setFilterList] = useState(films);
  const [mostraTutti, setMostraTutti] = useState(true);

  //Logic
  const clicked = (indice) => {
    setMostraTutti(false);
    setIndexSearch(indice); //al click prendo l'indice che corrisponde al genere del mio array "generi", per poi poterlo usare nel filter
  };

  const allList = () => {
    setMostraTutti(true); //al click lo reimposto a true cosi da mostrare tutti i film
  };

  //useEffect
  useEffect(() => {
    if (mostraTutti) {
      //se mostraTutti è true non eseguo nessun filter
      setFilterList(films);
    } else {
      //altrimenti filtro in base al genere
      const tmpList = films.filter((el) => el.genre === generi[indexSearch]); //paragono i generi, non ho eseguito "tolowercase()" perchè l'array di stringhe in generi è preso da genre di films
      setFilterList(tmpList);
    }
  }, [indexSearch, mostraTutti]); //variabili su cui osservarne i cambiamenti

  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main">
            <div>
              <label htmlFor="genere">GENERE</label>
              <select name="genere" id="genere">
                <option value="tutti" onClick={allList}>
                  MOSTRA TUTTI
                </option>
                {generi.map((genere, ind) => {
                  return (
                    <option
                      key={ind}
                      value="genere"
                      onClick={() => clicked(ind)}
                    >
                      {genere.toUpperCase()}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <ul>
                {filterList.map(({ title }, index) => {
                  return <li key={index}>{title}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
