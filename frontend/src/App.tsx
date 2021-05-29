import React, { Component, useContext } from "react";

// Libs
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import MeineGruppen from "./pages/MeineGruppen";
import Gruppen from "./pages/Gruppen";
import Profil from "./pages/Profil";
import Forum from "./pages/Forum";
import GroupDetail from "./pages/GroupDetail";

// Contexts
import UserContext, { UserProvider } from "./context/User";
import Impressum from "./pages/Impressum";
import QuestionDetail from "./pages/QuestionDetail";

const ProtectedRoute = ({ restricted, children, ...rest }: any) => {
  const [user, _] = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        !user && restricted ? <Redirect to="/signin" /> : children
      }
    />
  );
};

// Component
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          {/* NAVBAR */}
          <Navbar />
          {/* Router */}
          <div className="flex-grow flex min-h-full justify-center items-center">
            <Switch>
              <ProtectedRoute restricted={true} path="/question/:id">
                <QuestionDetail />
              </ProtectedRoute>
              <ProtectedRoute restricted={true} path="/group/:id">
                <GroupDetail />
              </ProtectedRoute>
              <ProtectedRoute restricted={true} path="/forum">
                <Forum />
              </ProtectedRoute>
              <ProtectedRoute restricted={true} path="/profile">
                <Profil />
              </ProtectedRoute>
              <ProtectedRoute restricted={true} path="/groups">
                <Gruppen />
              </ProtectedRoute>
              <ProtectedRoute restricted={true} path="/mygroups">
                <MeineGruppen />
              </ProtectedRoute>

              <Route path="/signup">
                <Registration />
              </Route>
              <Route path="/signin">
                <Login />
              </Route>
              <Route path="/impressum">
                <Impressum />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
