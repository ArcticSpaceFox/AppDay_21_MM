import React, { useContext, useState } from "react";

// Libs
import { Link, useHistory } from "react-router-dom";

// Context
import {UserContext, User} from "../context/User";

// Component
function Login() {
    // State
    const [user, setUser] = useContext(UserContext);
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    // functions
    const handleSubmit = (data: React.FormEvent<HTMLFormElement>) => {
        data.preventDefault();

        let _temp: User = {
          id: 1,
          email: email,
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            fname: 'Test',
            lname: 'User'
        };
        setUser(_temp);
        history.push("/mygroups")
    }
    // UI
    return (
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="w-2 bg-indigo-600"></div>

        <div className="flex items-center px-2 py-3">
          <div className="w-full max-w-xs">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  required value={email}
                  onChange={(v) => setEmail(v.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="karsten.wolf@uni-rostock.de"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Passwort
                </label>
                <input
                  required
                  value={password}
                  onChange={(v) => setPassword(v.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Einloggen
                </button>
                <Link
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  to="/signup"
                >
                  Neues Konto
                </Link>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;{new Date().getFullYear()} Bro-Boerse
            </p>
          </div>
        </div>
      </div>
    );
}

export default Login;