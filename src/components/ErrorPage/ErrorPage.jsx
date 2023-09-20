import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Oppps!!!! <br /> Meal Not Found
      </h1>
    </div>
  );
};

export default ErrorPage;
