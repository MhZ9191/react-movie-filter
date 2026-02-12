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

  const [currentGenere, setCurrentgenere] = useState("");
  const [filterList, setFilterList] = useState(films);

  const test = (e) => {
    setCurrentgenere(e.target.value);
  };

  useEffect(() => {
    if (currentGenere.toLowerCase() === "tutti") {
      setFilterList(films);
    } else {
      const tempo = films.filter((el) => {
        return el.genre.includes(currentGenere);
      });
      setFilterList(tempo);
    }
  }, [currentGenere]);

  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main">
            <div>
              <span>SEARCH</span>
              <form>
                <input type="text" placeholder="Type here" />
              </form>
            </div>
            <div>
              <span>GENERE</span>
              <select
                name="genere"
                id="genere"
                value={currentGenere}
                onChange={(e) => test(e)}
              >
                <option value="tutti">MOSTRA TUTTI</option>
                {generi.map((genere, ind) => {
                  return (
                    <option key={ind} value={genere}>
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
