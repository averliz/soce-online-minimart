import React from "react";
import CategoryForm from "../components/CategoryForm";
import config from "../config";

const CategoryFormView = () => {
  const createCategory = async (categoryData) => {
    const token = localStorage.getItem("x-auth-token");

    const response = await fetch(`${config.API_BASE_URL}/api/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
      body: JSON.stringify(categoryData),
    });

    const newCategory = await response.json();
  };

  return (
    <div>
      <CategoryForm onSubmit={createCategory} />
    </div>
  );
};

export default CategoryFormView;
