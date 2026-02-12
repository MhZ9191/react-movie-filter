export default function Main({ films }) {
  //array con i generi dei film senza duplicati
  const generi = films.reduce((acc, ce) => {
    const currentGenere = ce.genre;
    if (!acc.includes(currentGenere)) {
      acc.push(currentGenere);
    }
    return acc;
  }, []);

  return (
    <>
      <main>
        <section className="sec-main">
          <div className="div-main">
            <div>
              <label htmlFor="genere">GENERE</label>
              <select name="genere" id="genere">
                <option value="" disabled selected>
                  Seleziona una categoria
                </option>
                <option value="tutti">MOSTRA TUTTI</option>
                {generi.map((genere) => {
                  return <option value="genere">{genere.toUpperCase()}</option>;
                })}
              </select>
            </div>
            <div>
              <ul>
                {films.map(({ title }) => {
                  return <li>{title}</li>;
                })}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
