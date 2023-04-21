import { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import CategoryForm from "./CategoryForm";
import config from "../config";

const Admin = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/api/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${config.API_BASE_URL}/api/items`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleCategoryCreate = async (category) => {
    try {
      await axios.post(`${config.API_BASE_URL}/api/categories`, category);
      fetchCategories();
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const handleCategoryDelete = async (id) => {
    try {
      await axios.delete(`${config.API_BASE_URL}/api/categories/${id}`);
      fetchCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  const handleItemCreate = async (item) => {
    try {
      await axios.post(`${config.API_BASE_URL}/api/items`, item);
      fetchItems();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleItemDelete = async (id) => {
    try {
      await axios.delete(`${config.API_BASE_URL}/api/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Categories</h2>
      <CategoryForm onSubmit={handleCategoryCreate} />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}{" "}
            <button onClick={() => handleCategoryDelete(category.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <h2>Items</h2>
      <ItemForm onSubmit={handleItemCreate} categories={categories} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
