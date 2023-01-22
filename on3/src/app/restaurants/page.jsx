import React from "react";

async function fetchRestaurants() {
  const res = await fetch("http://localhost:1337/restaurants");
  return res.json();
}

async function Restaurants() {
  const restaurants = await fetchRestaurants();
  return <div>{JSON.stringify(restaurants)}</div>;
}

export default Restaurants;
