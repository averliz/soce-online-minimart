import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import "./ItemsView.css";
import config from "../config";

const ItemsView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${config.API_BASE_URL}/api/items`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <div className="item-grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemsView;
