import { Link, routes } from '@redwoodjs/router'

import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="w-2 bg-indigo-600"></div>

        <div className="flex items-center px-2 py-3">
          <div className="w-full max-w-xs">
            <div className="px-8 pt-6 pb-8 mb-4">
              <p className="text-2xl font-mono tracking-wide mb-4">
                Sicherheit
              </p>
              {isAuthenticated && <p>Logged in as {currentUser.roles}</p>}
              {currentUser}
              <div className="flex justify-between gap-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={logIn}
                >
                  Einloggen
                </button>
                <button
                  className={
                    (isAuthenticated
                      ? 'bg-blue-500 hover:bg-blue-700'
                      : 'bg-blue-300') +
                    ' text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  }
                  type="button"
                  onClick={logOut}
                >
                  Ausloggen
                </button>
              </div>
            </div>
            <p className="text-center text-gray-500 text-xs">
              &copy;{new Date().getFullYear()} Bro-Boerse
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
