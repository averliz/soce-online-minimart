import { useState } from "react";

const CategoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create New Category</legend>
        <div className="form-group">
          <label for="itemNameInput" className="form-label mt-4">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="categoryInput"
            placeholder="Enter category name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add Category
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default CategoryForm;
