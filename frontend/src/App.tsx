import React from "react";

// Libs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

// Contexts
import {UserProvider} from "./context/User";

// Component
function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* NAVBAR */}
          <Navbar />
          {/* Router */}
          <div className="flex-grow flex min-h-full justify-center items-center">
            <Switch>
              <Route path="/profile">
                <Profil/>
              </Route>
              <Route path="/groups">
                <Gruppen />
              </Route>
              <Route path="/mygroups">
                <MeineGruppen />
              </Route>
              <Route path="/signup">
                <Registration />
              </Route>
              <Route path="/signin">
                <Login />
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
