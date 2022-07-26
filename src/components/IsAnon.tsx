import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

function IsAnon(props: any) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  const navigate: Function = useNavigate();

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return props.children;
  } else {
    return navigate("/requests");
  }
}

export default IsAnon;
