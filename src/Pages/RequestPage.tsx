import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormPage from "../styles/FormPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RequestPage() {
  const [singers, setSingers] = useState("");
  const [song, setSong] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const error = () =>
    toast.error("Please Input your Song and Singers!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  interface Ibody {
    singers: string;
    song: string;
  }

  const handleSingers = (e: any) => setSingers(e.target.value);
  const handleSong = (e: any) => setSong(e.target.value);

  const submitRequest: any = (e: any) => {
    e.preventDefault();
    const body: Ibody = { singers, song };
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/request`, body)
      .then(() => {
        toast.success("Song submited!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSingers("");
        setSong("");
      })
      .catch(() => {
        error();
      });
  };
  return (
    <>
      <ToastContainer />
      <FormPage>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={submitRequest}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Submit a Song!</h3>
              <div className="form-group mt-3">
                <label>Singers</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter your singers"
                  value={singers}
                  onChange={handleSingers}
                />
              </div>
              <div className="form-group mt-3">
                <label>Song</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter your song"
                  value={song}
                  onChange={handleSong}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit request
                </button>
              </div>
              <Link to="/login">Login</Link>
            </div>
          </form>
        </div>
      </FormPage>
    </>
  );
}

export default RequestPage;
