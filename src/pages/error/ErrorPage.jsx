import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      {/* <NavBar /> */}
      <div style={{ padding: "5px" }}>
        <h1>Oops...</h1>
        <p>
          {isRouteErrorResponse(error) ? "Invalid Page" : "Unexpected Error"}
        </p>
      </div>
    </>
  );
};

export default ErrorPage;
