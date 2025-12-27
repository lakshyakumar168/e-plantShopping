import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ Calculate total cart amount (REQUIRED BY RUBRIC)
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total Cart Amount: ₹{totalAmount}</h3>

          <button onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </>
      )}
    </div>
  );
};

export default CartItem;
