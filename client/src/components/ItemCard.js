import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <Card className="item-card">
      <Card.Img
        variant="top"
        src={item.image_url || "https://via.placeholder.com/150"}
        style={{  width: 286, height: 286, objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Price: ${item.price}</Card.Text>
        <Button variant="primary" href={`/item/${item.id}`}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
