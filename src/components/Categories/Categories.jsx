/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = ({ category }) => {
  const { strCategory } = category;
  const navigate = useNavigate();

  const handleShowMeal = () => {
    navigate(`/meals/${strCategory}`);
  };

  return (
    <>
      <div className="categories-btn">
        <button onClick={handleShowMeal}>{strCategory}</button>
      </div>
    </>
  );
};

export default Categories;
