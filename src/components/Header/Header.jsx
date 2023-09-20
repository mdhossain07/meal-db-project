import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="categories-container">
        {categories.map((category) => (
          <Categories
            key={category.idCategory}
            category={category}
          ></Categories>
        ))}
      </div>
    </div>
  );
};

export default Header;
