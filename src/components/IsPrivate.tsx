import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsPrivate(props: any) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return navigate("/");
  } else {
    return props.children;
  }
}

export default IsPrivate;
