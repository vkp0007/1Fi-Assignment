export function ShopHero() {
  return (
    <section className="shop-hero">
      <div className="hero-copy">
        <div className="hero-pill">✦ NO-COST EMIs</div>

        <h1>
          Shop today,
          <br />
          <em>Pay later</em> using
          <br />
          Mutual funds.
        </h1>

        <p>
          No credit score required. No interest.
          <br />
          Backed by your investments.
        </p>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-orb">₹</div>
        <div className="hero-device">▱</div>
        <div className="hero-box">1Fi</div>
      </div>
    </section>
  );
}