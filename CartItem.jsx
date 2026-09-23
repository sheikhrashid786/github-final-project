import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    if (quantity >= 1) {
      dispatch(
        updateQuantity({
          id: id,
          quantity: quantity
        })
      );
    }
  };

  return (
    <div className="cart-item">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div className="cart-product" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />

              <h2>{item.name}</h2>

              <p>Price: ${item.price}</p>

              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item.id,
                      Number(e.target.value)
                    )
                  }
                />
              </label>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>
            Total Amount: ${totalAmount.toFixed(2)}
          </h2>

          <button>Continue Shopping</button>
          <button>Checkout</button>
        </>
      )}
    </div>
  );
}

export default CartItem;
