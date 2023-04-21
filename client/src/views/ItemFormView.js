import React, { useState, useEffect } from "react";
import ItemForm from "../components/ItemForm";
import config from "../config";

const ItemFormView = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch(`${config.API_BASE_URL}/api/categories`);
    const data = await response.json();
    setCategories(data);
  };

  const createItem = async (itemData) => {
    const token = localStorage.getItem("x-auth-token");

    const response = await fetch(`${config.API_BASE_URL}/api/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(itemData),
    });

    const newItem = await response.json();
    setCategories([...categories, newItem]);
  };

  return (
    <div>
      <ItemForm onSubmit={createItem} categories={categories} />
    </div>
  );
};

export default ItemFormView;
