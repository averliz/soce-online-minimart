import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemList from "../components/ItemList";
import CategoryList from "../components/CategoryList";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import config from "../config";
import "./AdminView.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const AdminView = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState("1");
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
    fetchCategories();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(`${config.API_BASE_URL}/api/items`);
    const data = await response.json();
    setItems(data);
  };

  const fetchCategories = async () => {
    const response = await fetch(`${config.API_BASE_URL}/api/categories`);
    const data = await response.json();
    setCategories(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin View</h1>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Admin Tabs"
          centered
        >
          <Tab label="Items" value="1" />
          <Tab label="Categories" value="2" />
        </Tabs>
      </Box>
      <TabPanel value={value} index="1">
        <ItemList items={items} />
        <Link to="/item-form" className="link">
          Create Item
        </Link>
      </TabPanel>
      <TabPanel value={value} index="2">
        <CategoryList categories={categories} />
        <br/>
        <Link to="/category-form" className="link">
          Create Category
        </Link>
      </TabPanel>
    </div>
  );
};

export default AdminView;
