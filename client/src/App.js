import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/User";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

axios.defaults.withCredentials = true;

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "/api";
} else {
  axios.defaults.baseURL = "http://localhost:4000/api";
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const { isAuthenticated, loading } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated && <Header />}

        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Home />
              ) : loading ? (
                <div>Loading</div>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile />
              ) : loading ? (
                <div>Loading</div>
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/setting"
            element={
              isAuthenticated ? (
                <Settings />
              ) : loading ? (
                <div>Loading</div>
              ) : (
                <Login />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* Register */}

      {/* Login */}

      {/* Home */}

      {/* Profile */}

      {/* Messenger */}
    </div>
  );
}

export default App;
