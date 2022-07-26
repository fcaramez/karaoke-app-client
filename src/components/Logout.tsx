import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return <button onClick={logout}>Logout</button>;
}

export default Logout;
