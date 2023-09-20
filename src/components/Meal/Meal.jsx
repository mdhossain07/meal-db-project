/* eslint-disable react/prop-types */
import "./Meal.css";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/meal/${idMeal}`);
  };

  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default Meal;
