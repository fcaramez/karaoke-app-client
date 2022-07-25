import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios, { AxiosResponse } from "axios";
import FormPage from "../styles/FormPage";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  interface IBody {
    username: string;
    password: string;
  }

  const navigate: Function = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e: Event | any) => setUsername(e.target.value);
  const handlePassword = (e: Event | any) => setPassword(e.target.value);

  const handleSubmit = (e: Event | any) => {
    e.preventDefault();

    const body: IBody = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, body)
      .then((response: AxiosResponse) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/request");
      })
      .catch((error: any) => {
        setErrorMessage(error.response.data.errorMessage);
      });
  };

  return (
    <FormPage>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter username"
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={handlePassword}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
    </FormPage>
  );
}

export default LoginPage;
