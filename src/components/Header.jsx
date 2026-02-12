export default function Header({ title }) {
  return (
    <header>
      <section className="sec-title">
        <div className="head-title">
          <h1>{title}</h1>
        </div>
      </section>
    </header>
  );
}
