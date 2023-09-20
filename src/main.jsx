import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Meals from "./components/Meals/Meals.jsx";
import MealDetails from "./components/MealDetails/MealDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "meals/:mealCategory",
        element: <Meals />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params?.mealCategory}`
          ),
      },
    ],
  },

  {
    path: "meal/:mealId",
    element: <MealDetails />,
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params?.mealId}`
      ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
