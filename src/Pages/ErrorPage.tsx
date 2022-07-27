import React from "react";
import FormPage from "../styles/FormPage";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorTag = styled.div`
  margin-top: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function ErrorPage() {
  return (
    <ErrorTag>
      <h1 className="Auth-form-title">404</h1>
      <Link to={"/"} style={{ textAlign: "center" }}>
        Back to requets
      </Link>
    </ErrorTag>
  );
}

export default ErrorPage;
