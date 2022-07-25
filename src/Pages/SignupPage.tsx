import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormPage from "../styles/FormPage";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate: Function = useNavigate();

  const handleUsername = (e: Event | null | any) => setUsername(e.target.value);
  const handlePassword = (e: Event | null | any) => setPassword(e.target.value);

  const handleSubmit = (e: Event | null | any) => {
    e.preventDefault();

    const body = { username, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate("/login");
      })
      .catch((err: any) => {
        setErrorMessage(err.response.errorMessage);
      });
  };

  return (
    <FormPage>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Signup</h3>
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
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>

      {errorMessage && <p>{errorMessage}</p>}
    </FormPage>
  );
}

export default SignupPage;
