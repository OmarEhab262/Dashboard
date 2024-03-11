import "./App.css";
import LogIn from "./pages/LogIn";
import ErrorPage from "./pages/ErrorPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/ForgotUserPass" element={<ForgotUserPass />} />
        <Route path="/CheckEmail" element={<CheckEmail />} />
        <Route path="/SuccessfulPassword" element={<SuccessfulPassword />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/CreatedParty" element={<CreatedParty />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Classification" element={<Classification />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/EndedEvents" element={<EndedEvents />} />
        <Route path="/NewEvents" element={<NewEvents />} />
        <Route
          path="/ShowEndedEventDetail"
          element={<ShowEndedEventDetail />}
        />
        <Route path="/EditEventDetail" element={<EditEventDetail />} />
        <Route path="/ShowNewEventDetails" element={<ShowNewEventDetails />} />
        <Route path="/ShowParties" element={<ShowParties />} />
        <Route path="/AddEvents" element={<AddEvents />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/User" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
