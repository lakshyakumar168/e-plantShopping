import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  {
    category: "Indoor Plants",
    items: [
      { id: 1, name: "Snake Plant", price: 250, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Money Plant", price: 200, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Peace Lily", price: 300, image: "https://via.placeholder.com/150" },
      { id: 4, name: "ZZ Plant", price: 350, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Aloe Vera", price: 180, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Rubber Plant", price: 400, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Outdoor Plants",
    items: [
      { id: 7, name: "Rose", price: 150, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Hibiscus", price: 220, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Bougainvillea", price: 280, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Jasmine", price: 200, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Sunflower", price: 120, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Tulsi", price: 100, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Succulents",
    items: [
      { id: 13, name: "Echeveria", price: 180, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Haworthia", price: 160, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Jade Plant", price: 240, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Sedum", price: 140, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Cactus", price: 200, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Crassula", price: 220, image: "https://via.placeholder.com/150" }
    ]
  }
];

const ProductList = () => {
  const dispatch = useDispatch();
  const [disabledButtons, setDisabledButtons] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setDisabledButt
