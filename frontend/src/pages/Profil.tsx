import React, {
  forwardRef,
  Props,
  useContext,
  useEffect,
  useState,
} from "react";

// Libs
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";

// Context
import { User, UserContext } from "../context/User";

// Component
function Profil() {
  const history = useHistory();
  // state
  const [user, setUser] = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [lastName, setlastName] = useState("");
  const [bdate, setBday] = useState(new Date());
  const [minAge, setminAge] = useState(17);
  const [maxAge, setmaxAge] = useState(35);
  const [studiengang, setStudiengang] = useState(0);
  const [semester, setSemester] = useState(0);

  // Functions
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  

    if (!user) return history.push("/login");

    const body = JSON.stringify({
      name: name,
      lastName: lastName,
      born: bdate,
      email: email,
      minAge: minAge,
      maxAge: maxAge,
      password: password,
      faculty: studiengang,
      semester: semester,
    });
    console.log(body)

    fetch("http://localhost:6002/user/"+user?.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setUser(data);
          history.push("/mygroups");
        })
        .catch(e => console.error(e));
  }

  // Effects
  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setname(user.name || "");
      setlastName(user.lastName || "");
      setBday(new Date(user.born));
      setminAge(user.minAge);
      setmaxAge(user.maxAge);
      setSemester(user.semester);
      setStudiengang(user.faculty);
    }
  }, [user]);

  // UI
  const DatePickerInput = ({  onClick, value, onChange }: any) => (
    <input
      className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );

  return (
    <div className="inputs w-full max-w-2xl p-6 mx-auto">
      <h2 className="text-2xl text-gray-900">Mein Profil</h2>
      <form
        className="mt-6 border-t border-gray-400 pt-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              email addresse
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="w-full md:w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              passwort
            </label>
            <input
              className="appearance-none block w-full mb-2 bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Altes Passwort"
              required
            />
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Neues Passwort"
            />
          </div>
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Profilbild
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
              type="file"
            />
          </div>

          <div className="personal w-full border-t border-gray-400 pt-4">
            <h2 className="text-2xl text-gray-900">Persönliche Daten:</h2>
            <div className="flex items-center justify-between mt-4">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Vorname
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  nachname
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  type="text"
                  value={lastName}
                  onChange={(e) => setlastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                geburtstag
              </label>
              <DatePicker
                selected={bdate}
                dateFormat="dd/MM/yyyy"
                onChange={(date: Date) => setBday(date)}
                customInput={<DatePickerInput />}
                wrapperClassName="w-full"
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                studiengang
              </label>
              <div className="flex-shrink w-full inline-block relative">
                <select
                  className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded"
                  value={studiengang}
                  onChange={(e) => setStudiengang(Number(e.target.value))}
                >
                  <option value={0}>Sonstiges</option>
                  <option value={1}>INFORMATIK</option>
                  <option value={2}>ITTI</option>
                  <option value={3}>WINF</option>
                  <option value={4}>AGRAING</option>
                  <option value={5}>SCHIFFSBAU</option>
                </select>
                <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                semester
              </label>
              <div className="flex-shrink w-full inline-block relative">
                <select
                  className="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded "
                  value={semester}
                  onChange={(e) => setSemester(Number(e.target.value))}
                >
                  <option>wähle ...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </select>
                <div className="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Module
              </label>
              <input
                className="appearance-none block w-full mb-2 bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                type="text"
                placeholder="Füge ein modul hinzu..."
                required
              />
              <div>
                <div className="bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1 shadow-lg overflow-hidden">
                  <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">
                    ADS
                  </span>
                  <button
                    className="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none"
                    type="button"
                  >
                    <svg
                      className="w-6 h-6 fill-current mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="bg-indigo-100 inline-flex items-center text-sm rounded mt-2 mr-1 shadow-lg overflow-hidden">
                  <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">
                    LoPro
                  </span>
                  <button
                    className="w-6 h-8 inline-block align-middle text-gray-500 bg-blue-200 focus:outline-none"
                    type="button"
                  >
                    <svg
                      className="w-6 h-6 fill-current mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Alter min
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  type="number"
                  value={minAge}
                  onChange={(e) => setminAge(Number(e.target.value))}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Alter max
                </label>
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                  type="number"
                  value={maxAge}
                  onChange={(e) => setmaxAge(Number(e.target.value))}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                type="submit"
              >
                save changes
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Profil;
