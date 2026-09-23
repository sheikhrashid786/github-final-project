import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: Number(e.target.value)
                    })
                  )
                }
              />

              <p>Subtotal: ${item.price * item.quantity}</p>

              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total}</h2>
        </>
      )}
    </div>
  );
}

export default CartItem;
