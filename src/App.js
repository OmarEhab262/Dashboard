import "./App.css";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotUserPass from "./pages/ForgotUserPass";
import CheckEmail from "./pages/CheckEmail";
import SuccessfulPassword from "./components/SuccessfulPassword";
import CreatedParty from "./components/CreatedParty";
import Welcome from "./components/Welcome";
import MainPage from "./pages/MainPage";
import Users from "./pages/Users";
import Classification from "./pages/Classification";
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
function App() {
  return (
    <Router basename="/Dashboard">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Dashboard/ForgotUserPass" element={<ForgotUserPass />} />
        <Route path="/Dashboard/CheckEmail" element={<CheckEmail />} />
        <Route
          path="/Dashboard/SuccessfulPassword"
          element={<SuccessfulPassword />}
        />
        <Route path="/Dashboard/Welcome" element={<Welcome />} />
        <Route path="/Dashboard/CreatedParty" element={<CreatedParty />} />
        <Route path="/Dashboard/MainPage" element={<MainPage />} />
        <Route path="/Dashboard/Users" element={<Users />} />
        <Route path="/Dashboard/Classification" element={<Classification />} />
        <Route path="/Dashboard/Reservations" element={<Reservations />} />
        <Route path="/Dashboard/EndedEvents" element={<EndedEvents />} />
        <Route path="/Dashboard/NewEvents" element={<NewEvents />} />
        <Route
          path="/Dashboard/ShowEndedEventDetail"
          element={<ShowEndedEventDetail />}
        />
        <Route
          path="/Dashboard/EditEventDetail"
          element={<EditEventDetail />}
        />
        <Route
          path="/Dashboard/ShowNewEventDetails"
          element={<ShowNewEventDetails />}
        />
        <Route path="/Dashboard/ShowParties" element={<ShowParties />} />
        <Route path="/Dashboard/AddEvents" element={<AddEvents />} />
        <Route path="/Dashboard/Booking" element={<Booking />} />
        <Route path="/Dashboard/User" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
