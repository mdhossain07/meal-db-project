import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import MealDetails from "../MealDetails/MealDetails";

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
