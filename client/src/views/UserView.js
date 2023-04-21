import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import config from "../config";

const UserView = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`${config.API_BASE_URL}/api/items`);
    const data = await response.json();
    setItems(data);
  };

  return (
    <div>
      <h1>User View</h1>
      <ItemList items={items} />
    </div>
  );
};

export default UserView;
