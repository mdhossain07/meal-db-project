import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const allMeals = useLoaderData();
  const meals = allMeals.meals;

  return (
    <>
      <div className="meals-container">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal}></Meal>
        ))}
      </div>
    </>
  );
};

export default Meals;
