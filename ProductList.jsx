import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2a14"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 3,
    name: "Monstera",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 22,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 28,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Paradise Nursery Plants</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              width="200"
              height="180"
            />

            <h2>{product.name}</h2>
            <p>${product.price}</p>

            <button onClick={() => dispatch(addItem(product))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
