import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryList from "../components/CategoryList";
import config from "../config";
import "./CategoryView.css";

const CategoryView = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          `${config.API_BASE_URL}/api/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="category-view-container">
      <CategoryList categories={categories} />
    </div>
  );
};

export default CategoryView;
