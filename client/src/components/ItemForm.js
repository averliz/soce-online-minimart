import { useState } from "react";
import "./ItemForm.css";

const ItemForm = ({ onSubmit, categories }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description, price, image_url, categoryName });
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    setCategoryName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create New Item</legend>
        <div className="form-group">
          <label for="itemNameInput" className="form-label mt-4">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemNameInput"
            placeholder="Enter product name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="priceInput" className="form-label mt-4">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="priceInput"
            placeholder="$"
          />
        </div>
        <div className="form-group">
          <label for="exampleSelect1" className="form-label mt-4">
            Category
          </label>
          <select
            className="form-select"
            value={categoryName}
            onChange={(event) => setCategoryName(event.target.value)}
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label for="imageURLInput" className="form-label mt-4">
            Image URL:
            <input
              type="text"
              className="form-control"
              value={image_url}
              onChange={(event) => setImageUrl(event.target.value)}
            />
          </label>
        </div>

        <div className="form-group">
          <label for="itemDescription" class="form-label mt-4">
            Description
          </label>
          <textarea
            className="form-control"
            id="itemDescription"
            rows="3"
            spellcheck="true"
            style={{ height: "75px" }}
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Item
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default ItemForm;
