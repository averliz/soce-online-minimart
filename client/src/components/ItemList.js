import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ItemList.css";
import config from "../config";


const ItemList = () => {
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
    <div className="item-list-container">
      <h1 className="item-list-title">Items</h1>
      <div className="item-list">
        {items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`} className="item">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
