
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeItem,
  selectCartItems,
} from "../redux/CartSlice.jsx";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const getItemPrice = (item) => Number(item.cost ?? item.price ?? 0);

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + getItemPrice(item) * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity <= 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckout = () => {
    alert("Checkout is coming soon!");
  };

  return (
    <main className="cart-container page-shell">
      <div className="section-heading">
        <p className="eyebrow">Your leafy selections</p>
        <h1>Shopping Cart</h1>
        <p>Review your plants and get your green space growing.</p>
      </div>

      {cartItems.length === 0 ? (
        <section className="cart-empty">
          <div className="empty-cart-icon" aria-hidden="true">
            🪴
          </div>
          <h2>Your cart is looking a little green-less.</h2>
          <p>Add some beautiful plants to get started.</p>
          <button
            className="button button-primary"
            type="button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </section>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => {
              const unitPrice = getItemPrice(item);
              const itemTotal = unitPrice * item.quantity;

              return (
                <article className="cart-item" key={item.id}>
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>

                    {item.category && (
                      <p className="cart-item-category">
                        {item.category}
                      </p>
                    )}

                    <p className="cart-item-unit-price">
                      Unit price: ${unitPrice.toFixed(2)}
                    </p>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => handleDecrement(item)}
                      >
                        −
                      </button>

                      <span aria-live="polite">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart-item-total">
                      Item total: ${itemTotal.toFixed(2)}
                    </p>

                    <button
                      className="button button-delete"
                      type="button"
                      onClick={() => handleRemove(item)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <section className="cart-summary">
            <p>
              Total items:{" "}
              {cartItems.reduce(
                (total, item) => total + item.quantity,
                0
              )}
            </p>

            <h2>
              Total Amount: ${totalAmount.toFixed(2)}
            </h2>

            <div className="cart-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="button button-light"
                type="button"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}

