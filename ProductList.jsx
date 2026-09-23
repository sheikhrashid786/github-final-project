import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae2a14"
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 3,
    name: "Aloe Vera",
    category: "Succulents",
    price: 20,
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09"
  },
  {
    id: 4,
    name: "Jade Plant",
    category: "Succulents",
    price: 28,
    image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
  },
  {
    id: 5,
    name: "Monstera",
    category: "Tropical Plants",
    price: 35,
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 6,
    name: "Spider Plant",
    category: "Tropical Plants",
    price: 22,
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Tropical Plants"
  ];

  return (
    <div className="product-list">
      <h1>Paradise Nursery Plants</h1>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="products">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="200"
                    height="180"
                  />

                  <h3>{product.name}</h3>
                  <p>${product.price}</p>

                  <button onClick={() => dispatch(addItem(product))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
