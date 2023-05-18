import React, { useState } from 'react'

export default function SideNavbar() {
  const [mobile, setMobile] = useState(false)

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <div className="relative min-h-screen md:flex">
      {/* mobile menu bar */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* logo */}
        <a href="#" className="block p-4 text-white font-bold">
          Better Dev
        </a>
        {/* mobile menu button */}
        <button
          className="p-4 focus:outline-none focus:bg-gray-700"
          onClick={handleMobile}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {/* sidebar */}
      <div
        className={`${
          mobile ? '' : '-translate-x-full'
        } bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        {/* logo */}
        <a href="#" className="text-white flex items-center space-x-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>
          <span className="text-2xl font-extrabold">Better Dev</span>
        </a>
        {/* nav */}
        <nav>
          <a
            href="#"
            className="block py-2 5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            About
          </a>
          <a
            href="#"
            className="block py-2 5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
          >
            Pricing
          </a>
        </nav>
      </div>

      {/* content */}
      <div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
    </div>
  )
}
