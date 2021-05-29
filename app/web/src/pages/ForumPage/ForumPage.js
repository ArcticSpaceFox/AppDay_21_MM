import { Link, routes } from '@redwoodjs/router'

const ForumPage = () => {
  return (
    <div className="h-16 mt-10 bg-indigo-600">
      <div className="max-w-7xl mx-auto h-full flex flex-row justify-between items-center text-gray-50">
        <p>© Bro-Boerse {new Date().getFullYear()}</p>
        <div className="gap-2">
          <Link to={routes.impressum()}>impressum</Link>
        </div>
        <a href="https://github.com/ArcticSpaceFox/AppDay_21_MM">open source</a>
      </div>
    </div>
  )
}

export default ForumPage