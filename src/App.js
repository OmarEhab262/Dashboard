import React, { useState, useEffect } from "react";
import "./App.css";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ForgotUserPass from "./pages/ForgotUserPass";
import CheckEmail from "./pages/CheckEmail";
import SuccessfulPassword from "./components/SuccessfulPassword";
import CreatedParty from "./components/CreatedParty";
import Welcome from "./components/Welcome";
import MainPage from "./pages/MainPage";
import Users from "./pages/Users";
import Reservations from "./pages/Reservations";
import ShowParties from "./pages/ShowParties";
import Booking from "./pages/Booking";
import EndedEvents from "./pages/EndedEvents";
import NewEvents from "./pages/NewEvents";
import ShowEndedEventDetail from "./pages/ShowEndedEventDetail";
import EditEventDetail from "./pages/EditEventDetail";
import ShowNewEventDetails from "./pages/ShowNewEventDetails";
import AddEvents from "./pages/AddEvents";
import User from "./pages/User";
import ShowTicket from "./pages/ShowTicket";
import Home from "./web/Home";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setAuthenticated(!!token);
  }, []);

  const PrivateRoute = ({ element: Element, ...rest }) => {
    return authenticated ? <Element {...rest} /> : <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/ForgotUserPass" element={<ForgotUserPass />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route path="/SuccessfulPassword" element={<SuccessfulPassword />} />
        <Route
          path="/Welcome"
          element={<PrivateRoute element={<Welcome />} />}
        />
        <Route
          path="/CreatedParty"
          element={<PrivateRoute element={<CreatedParty />} />}
        />
        <Route
          path="/MainPage"
          element={<PrivateRoute element={<MainPage />} />}
        />
        <Route path="/Users" element={<PrivateRoute element={<Users />} />} />
        <Route
          path="/Reservations"
          element={<PrivateRoute element={<Reservations />} />}
        />
        <Route
          path="/EndedEvents"
          element={<PrivateRoute element={<EndedEvents />} />}
        />
        <Route
          path="/NewEvents"
          element={<PrivateRoute element={<NewEvents />} />}
        />
        <Route
          path="/ShowEndedEventDetail/:id"
          element={<PrivateRoute element={<ShowEndedEventDetail />} />}
        />
        <Route
          path="/EditEventDetail"
          element={<PrivateRoute element={<EditEventDetail />} />}
        />
        <Route
          path="/ShowNewEventDetails/:id"
          element={<PrivateRoute element={<ShowNewEventDetails />} />}
        />
        <Route
          path="/ShowParties"
          element={<PrivateRoute element={<ShowParties />} />}
        />
        <Route
          path="/ShowTicket"
          element={<PrivateRoute element={<ShowTicket />} />}
        />
        <Route
          path="/AddEvents"
          element={<PrivateRoute element={<AddEvents />} />}
        />
        <Route
          path="/Booking"
          element={<PrivateRoute element={<Booking />} />}
        />
        <Route path="/User" element={<PrivateRoute element={<User />} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
