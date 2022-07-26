import { useState, useEffect, useContext } from "react";
import axios, { AxiosResponse } from "axios";
import FormPage from "../styles/FormPage";
import { AuthContext } from "../context/auth.context";
import { request } from "https";

function RequestView() {
  const [requests, setRequests] = useState<any>([]);

  const { user } = useContext(AuthContext);

  const getToken = localStorage.getItem("authToken");

  const fetchApi: Function = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/request`, {
        headers: {
          Authorization: `Bearer: ${getToken}`,
        },
      })
      .then((response: AxiosResponse) => {
        if (response.data.length === 0) {
          return;
        }
        setRequests(response.data);
      })
      .catch(() => {
        alert("Call Xico!");
      });
  };

  const removeItem = (onStageId: any) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/request/${onStageId}`, {
        headers: {
          Authorization: `Bearer: ${getToken}`,
        },
      })
      .then(() => {
        setRequests([]);
      })
      .catch(() => {
        alert("Call Xico!");
      });
  };

  useEffect(() => {
    fetchApi();
  }, [removeItem]);

  return (
    <>
      <FormPage>
        <div>
          <h1 className="Auth-form-title">Song Requests: </h1>
        </div>
        {requests.length > 0 ? (
          <div>
            <form>
              <div>
                <div>
                  {requests.map((request: any) => {
                    return (
                      <>
                        <hr />
                        <p style={{ textAlign: "center" }}>
                          Singers: {request.singers}
                        </p>
                        <p style={{ textAlign: "center" }}>
                          Song: {request.song}
                        </p>
                        <a
                          style={{
                            marginLeft: "47%"
                          }}
                          className="btn btn-primary"
                          onClick={() => removeItem(request._id)}>
                          Delete
                        </a>
                      </>
                    );
                  })}
                </div>
              </div>
            </form>
          </div>
        ) : (
          <h1 style={{ textAlign: "center" }}>No Requests yet</h1>
        )}
      </FormPage>
    </>
  );
}

export default RequestView;
