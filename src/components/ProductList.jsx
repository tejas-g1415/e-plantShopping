
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  selectCartItems,
  selectCartCount,
} from "../redux/CartSlice.jsx";

export function Navbar({ page, setPage }) {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <button
        className="brand"
        type="button"
        onClick={() => setPage("home")}
        aria-label="Paradise Nursery home"
      >
        <span className="brand-icon" aria-hidden="true">❧</span>
        <span>
          Paradise <em>Nursery</em>
        </span>
      </button>

      <nav className="main-nav" aria-label="Main navigation">
        <button
          type="button"
          className={page === "home" ? "nav-link active" : "nav-link"}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          type="button"
          className={page === "plants" ? "nav-link active" : "nav-link"}
          onClick={() => setPage("plants")}
        >
          Plants
        </button>

        <button
          type="button"
          className={page === "cart" ? "nav-link active nav-cart" : "nav-link nav-cart"}
          onClick={() => setPage("cart")}
          aria-label={`Shopping cart, ${cartCount} items`}
        >
          <span aria-hidden="true">🛒</span> Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </nav>
    </header>
  );
}

const plantCategories = [
  {
    name: "Air Purifying Plants",
    description: "Fresh-looking favorites for a greener home.",
    plants: [
      { id: "ap1", name: "Snake Plant", price: 18, description: "Upright, architectural leaves and easy care.", image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=800&q=85" },
      { id: "ap2", name: "Peace Lily", price: 24, description: "Elegant dark leaves with graceful white blooms.", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=85" },
      { id: "ap3", name: "Areca Palm", price: 32, description: "A tropical palm that brings softness to a room.", image: "https://images.unsplash.com/photo-1597055181300-a8b7be7c1b0d?auto=format&fit=crop&w=800&q=85" },
      { id: "ap4", name: "Spider Plant", price: 15, description: "A cheerful classic with arching striped leaves.", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=85" },
      { id: "ap5", name: "Rubber Plant", price: 28, description: "Glossy foliage that makes a bold statement.", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=85" },
      { id: "ap6", name: "Boston Fern", price: 21, description: "Soft, feathery fronds for a lush corner.", image: "https://images.unsplash.com/photo-1597055181449-9a7b8c4c6e58?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    name: "Low Maintenance Plants",
    description: "Lovely greenery that keeps care simple.",
    plants: [
      { id: "lm1", name: "Golden Pothos", price: 16, description: "Trailing vines with cheerful golden variegation.", image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?auto=format&fit=crop&w=800&q=85" },
      { id: "lm2", name: "ZZ Plant", price: 25, description: "Shiny leaves and a forgiving nature.", image: "https://images.unsplash.com/photo-1632207691143-643e2b4a6a31?auto=format&fit=crop&w=800&q=85" },
      { id: "lm3", name: "Monstera Deliciosa", price: 35, description: "Iconic split leaves for a tropical look.", image: "https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?auto=format&fit=crop&w=800&q=85" },
      { id: "lm4", name: "Dracaena", price: 27, description: "A sculptural plant with upright foliage.", image: "https://images.unsplash.com/photo-1597055181300-a8b7be7c1b0d?auto=format&fit=crop&w=800&q=85" },
      { id: "lm5", name: "Jade Plant", price: 19, description: "A compact succulent with plump green leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85" },
      { id: "lm6", name: "Philodendron", price: 22, description: "Heart-shaped leaves for shelves and plant stands.", image: "https://images.unsplash.com/photo-1616690246024-7b0f8f6f9d6b?auto=format&fit=crop&w=800&q=85" }
    ]
  },
  {
    name: "Succulents & Cacti",
    description: "Small, sculptural plants with character.",
    plants: [
      { id: "sc1", name: "Aloe Vera", price: 14, description: "A sun-loving succulent with fleshy leaves.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85" },
      { id: "sc2", name: "Echeveria", price: 12, description: "A rosette-shaped succulent in soft green tones.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=85" },
      { id: "sc3", name: "Moon Cactus", price: 11, description: "A compact cactus for a sunny windowsill.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85" },
      { id: "sc4", name: "String of Pearls", price: 20, description: "Bead-like leaves cascade beautifully from a pot.", image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=800&q=85" },
      { id: "sc5", name: "Haworthia", price: 13, description: "A small striped succulent with striking texture.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=85" },
      { id: "sc6", name: "Prickly Pear Cactus", price: 17, description: "A distinctive cactus with flat paddle-shaped pads.", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=85" }
    ]
  }
];

export const allPlants = plantCategories.flatMap((category) =>
  category.plants.map((plant) => ({
    ...plant,
    category: category.name,
  }))
);

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [addedToCart, setAddedToCart] = useState({});

  const addedIds = new Set(cartItems.map((item) => item.id));

  return (
    <main className="catalog page-shell">
      <div className="section-heading">
        <p className="eyebrow">Find your new favorite</p>
        <h1>Bring home a little green.</h1>
        <p>
          Thoughtfully selected plants for every room and every
          level of experience.
        </p>
      </div>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <div className="category-heading">
            <div>
              <h2>{category.name}</h2>
              <p>{category.description}</p>
            </div>
            <span className="category-count">
              {category.plants.length} plants
            </span>
          </div>

          <div className="plant-grid">
            {category.plants.map((plant) => {
              const isAdded = addedIds.has(plant.id);
              const isDisabled = addedToCart[plant.name] || isAdded;

              return (
                <article className="plant-card" key={plant.id}>
                  <div className="plant-image-wrap">
                    <img
                      className="plant-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.src =
                          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=85";
                      }}
                    />
                    <span className="plant-category-tag">
                      {category.name}
                    </span>
                  </div>

                  <div className="plant-card-body">
                    <div className="plant-title-row">
                      <h3>{plant.name}</h3>
                      <span className="plant-price">
                        ${plant.price.toFixed(2)}
                      </span>
                    </div>

                    <p>{plant.description}</p>

                    <button
                      className={`button ${
                        isDisabled ? "button-added" : "button-primary"
                      } add-button`}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => {
                        dispatch(
                          addToCart({
                            ...plant,
                            category: category.name,
                          })
                        );

                        setAddedToCart((previous) => ({
                          ...previous,
                          [plant.name]: true,
                        }));
                      }}
                    >
                      {isDisabled
                        ? "Added to Cart ✓"
                        : "Add to Cart"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
