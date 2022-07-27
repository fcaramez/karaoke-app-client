import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RequestPage from "./Pages/RequestPage";
import IsPrivate from "./components/IsPrivate";
import RequestView from "./Pages/RequestView";
import Logout from "./components/Logout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RequestPage />} />
        <Route
          path="/requests-view"
          element={
            <IsPrivate>
              <RequestView />
            </IsPrivate>
          }
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
