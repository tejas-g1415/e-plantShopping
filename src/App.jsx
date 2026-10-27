import React, { useState } from "react";
import { useSelector } from "react-redux";
import AboutUs from "./components/AboutUs.jsx";
import ProductList, {
  Navbar,
} from "./components/ProductList.jsx";
import CartItem from "./components/CartItem.jsx";
import { selectCartCount } from "./redux/CartSlice.jsx";
import "./App.css";

function Navbar({ page, setPage }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => setPage("home")} aria-label="Paradise Nursery home">
        <span className="brand-icon" aria-hidden="true">❧</span>
        <span>Paradise <em>Nursery</em></span>
      </button>
      <nav className="main-nav" aria-label="Main navigation">
        <button className={page === "home" ? "nav-link active" : "nav-link"} onClick={() => setPage("home")}>Home</button>
        <button className={page === "plants" ? "nav-link active" : "nav-link"} onClick={() => setPage("plants")}>Plants</button>
        <button className={page === "cart" ? "nav-link active nav-cart" : "nav-link nav-cart"} onClick={() => setPage("cart")}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}


function LandingPage({ onGetStarted }) {
  return (
    <main className="landing-page">
      <section className="hero background-image">
        <div className="hero-overlay" />

        <div className="hero-content">
          <p className="hero-kicker">
            GROW A LITTLE HAPPINESS
          </p>

          <h1>
            Welcome to <br />
            <em>Paradise Nursery</em>
          </h1>

          <p className="hero-description">
            Thoughtful plants. Happier spaces. Find the perfect
            green companion for your home at Paradise Nursery.
          </p>

          <button
            className="button button-light hero-button"
            onClick={onGetStarted}
          >
            Get Started <span aria-hidden="true">→</span>
          </button>

          <div className="hero-note">
            <span>✦</span> Good things grow here
          </div>
        </div>

        <div className="hero-side-note">
          A MORE NATURAL KIND OF HOME
        </div>
      </section>

      <AboutUs />

      <section className="home-cta">
        <p className="eyebrow">
          Your next favorite plant is waiting
        </p>

        <h2>Let’s find your kind of green.</h2>

        <button
          className="button button-primary"
          onClick={onGetStarted}
        >
          Explore our plants
        </button>
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <Navbar page={page} setPage={navigate} />
      {page === "home" && <LandingPage onGetStarted={() => navigate("plants")} />}
      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem onContinueShopping={() => navigate("plants")} />}
      <footer className="site-footer">
        <button className="footer-brand" onClick={() => navigate("home")}>Paradise Nursery</button>
        <p>Grow joy, one plant at a time.</p>
        <span>© {new Date().getFullYear()} Paradise Nursery</span>
      </footer>
    </div>
  );
}