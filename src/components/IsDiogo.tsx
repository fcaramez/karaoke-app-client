import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsDiogo(props: any) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  const navigate = useNavigate();
  if (isLoading) return <p>Loading ...</p>;


  if (user.types !== "Admin" || !isLoggedIn) {
    return navigate("/requests");
  } else {
    return props.children;
  }
}

export default IsDiogo;
