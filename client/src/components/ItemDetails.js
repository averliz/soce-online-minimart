import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";
import "./ItemDetails.css";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `${config.API_BASE_URL}/api/items/${id}`
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-details-container">
      <h1>{item.name}</h1>
      {item.image_url && (
        <img
          src={item.image_url}
          alt={item.name}
          style={{ width: 150, height: 150, objectFit: "cover" }}
        />
      )}
      <p>{item.description}</p>
      <p>Price: ${Number(item.price).toFixed(2)}</p>
      <p>Category: {item.Category.name}</p>
    </div>
  );
};

export default ItemDetails;
