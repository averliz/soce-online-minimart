import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetails.js";
import Navbar from "./components/Navbar.js";
import AdminView from "./views/AdminView.js";
import CategoryFormView from "./views/CategoryFormView.js";
import ItemFormView from "./views/ItemFormView.js";
import ItemsView from "./views/ItemsView.js";
import CategoryView from "./views/CategoryView.js";
import LoginView from "./views/LoginView.js";

function App() {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem("x-auth-token")
  );
  return (
    <Router>
      <Navbar authToken={authToken} setAuthToken={setAuthToken} />
      <Routes>
        <Route path="/" element={<ItemsView />} />
        <Route path="/categories" element={<CategoryView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route
          path="/login"
          element={<LoginView setAuthToken={setAuthToken} />}
        />
        <Route path="/item-form" element={<ItemFormView />} />
        <Route path="/category-form" element={<CategoryFormView />} />
      </Routes>
    </Router>
  );
}

export default App;
