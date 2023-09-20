/* eslint-disable react/jsx-key */
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import "./MealDetails.css";

const MealDetails = () => {
  const mealDetails = useLoaderData().meals;

  return (
    <div>
      {mealDetails.map((meal) => (
        <div className="mealDetails-container">
          <div>
            <img src={meal.strMealThumb} alt="" />
          </div>
          <div>
            <h2 style={{ color: "goldenRod" }}>Dish: {meal.strMeal}</h2>
            <h3 style={{ color: "lightGreen" }}>
              category: {meal.strCategory}
            </h3>
            <p>
              <span style={{ fontWeight: "bold", color: "salmon" }}>
                Instructions:
              </span>
              {meal.strInstructions}
            </p>
            <a href={meal.strYoutube}>Recipe Link</a>
          </div>
        </div>
      ))}

      <Link to={-1}>
        <button style={{ marginTop: "30px" }}>Go Back </button>
      </Link>
    </div>
  );
};

export default MealDetails;
