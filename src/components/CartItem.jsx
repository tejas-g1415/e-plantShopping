import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../redux/CartSlice.jsx";

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const handleCheckout = () => {
    setCheckoutMessage("Coming Soon! Checkout is not available yet.");
  };

  if (items.length === 0) {
    return (
      <main className="cart-page page-shell">
        <div className="empty-cart">
          <div className="empty-cart-icon" aria-hidden="true">🪴</div>
          <p className="eyebrow">Your cart is taking a little rest</p>
          <h1>Your cart is empty</h1>
          <p>Find a plant that makes you smile and it will show up here.</p>
          <button className="button button-primary" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page page-shell">
      <div className="section-heading cart-heading">
        <p className="eyebrow">Almost yours</p>
        <h1>Your shopping cart</h1>
        <p>Review your plants and adjust quantities before checkout.</p>
      </div>

      <div className="cart-layout">
        <section className="cart-items-list" aria-label="Items in your cart">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
                onError={(event) => {
                  event.currentTarget.src = "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=85";
                }}
              />
              <div className="cart-item-details">
                <p className="cart-item-category">{item.category}</p>
                <h2>{item.name}</h2>
                <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button
                    type="button"
                    className="quantity-button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >−</button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    type="button"
                    className="quantity-button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >+</button>
                </div>
              </div>
              <div className="cart-item-end">
                <strong className="line-total">${(item.price * item.quantity).toFixed(2)}</strong>
                <span className="line-total-label">Item total</span>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >Remove</button>
              </div>
            </article>
          ))}
        </section>

        <aside className="order-summary">
          <p className="eyebrow">Order summary</p>
          <h2>Your total</h2>
          <div className="summary-row">
            <span>Plants ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-label">Calculated later</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
          <p className="summary-note">Taxes and delivery, if applicable, are not included in this demo total.</p>
          <button type="button" className="button button-primary checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          {checkoutMessage && <p className="checkout-message" role="status">{checkoutMessage}</p>}
          <button type="button" className="button button-outline checkout-button" onClick={onContinueShopping}>
            Continue Shopping
          </button>
          <button type="button" className="clear-cart-button" onClick={() => dispatch(clearCart())}>
            Empty cart
          </button>
        </aside>
      </div>
    </main>
  );
}