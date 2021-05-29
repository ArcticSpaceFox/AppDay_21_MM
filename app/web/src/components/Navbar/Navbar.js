import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false)
  const { loading, isAuthenticated, logIn, logOut, currentUser } = useAuth()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to={routes.home()}>
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to={routes.mygroups()}
                  className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:ring hover:ring-indigo-500"
                >
                  Meine Gruppen
                </Link>

                <Link
                  to={routes.groups()}
                  activeClassName="text-indigo-600"
                  className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:ring hover:ring-indigo-500"
                >
                  Stöbern
                </Link>

                <Link
                  to={routes.forum()}
                  activeClassName="text-indigo-600"
                  className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:ring hover:ring-indigo-500"
                >
                  Forum
                </Link>

                <Link
                  to={routes.profile()}
                  activeClassName="text-indigo-600"
                  className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:ring hover:ring-indigo-500"
                >
                  Profil
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-100 p-1 rounded-full text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-500">
                <span className="sr-only">View notifications</span>

                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <div className="ml-3 relative">
                <div>
                  <Link
                    to={routes.profile()}
                    activeClassName="ring-4 ring-indigo-600"
                    className="max-w-xs bg-gray-100 rounded-full flex items-center text-sm focus:outline-none"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={'https://via.placeholder.com/150'}
                      alt="Profile"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobile(!mobile)}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={(mobile ? '' : 'hidden') + ' md:hidden'} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-700">
          <Link
            to="/mygroups"
            activeClassName="bg-indigo-600 text-gray-50"
            className="hover:ring hover:ring-indigo-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Meine Gruppen
          </Link>

          <Link
            to="/groups"
            activeClassName="bg-indigo-600 text-gray-50"
            className="hover:ring hover:ring-indigo-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Stöbern
          </Link>

          <Link
            to="/forum"
            activeClassName="bg-indigo-600 text-gray-50"
            className="hover:ring hover:ring-indigo-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Forum
          </Link>

          <Link
            to="/profile"
            activeClassName="bg-indigo-600 text-gray-50"
            className="hover:ring hover:ring-indigo-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Profil
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-300">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-indigo-600">
                {'Anon'}
              </div>
              <div className="text-sm font-medium leading-none text-gray-700">
                {'anon@none'}
              </div>
            </div>
            <button className="ml-auto bg-gray-100 flex-shrink-0 p-1 rounded-full text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
