import React, { useState } from 'react'

export default function Navbar() {
  const [mobile, setMobile] = useState(false)

  const handleMobile = () => {
    setMobile(!mobile)
  }

  return (
    <div>
      {/* navbar goes here */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center space-x-1 py-5 text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                    />
                  </svg>
                  <span className="font-bold">Better Dev</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Pricing
                </a>
              </div>
            </div>
            {/* secundary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </a>
            </div>

            {/* mobile button goes here */}
            <div className="md:hidden flex items-center" onClick={handleMobile}>
              <button>
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
          </div>
        </div>
        {/* mobile menu */}
        <div className={`${mobile ? '' : 'hidden '} md:hidden`}>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={handleMobile}
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={handleMobile}
          >
            Pricing
          </a>
        </div>
      </nav>

      {/* content goes here */}
      <div className="py-32 text-center">
        <h2 className="font-extrabold text-4xl">Navbars in Tailwind!</h2>
      </div>
    </div>
  )
}

/* youtube tutorial
https://www.youtube.com/watch?v=miiPsBlqMns&t=1473s
Building Tailwind CSS Navbars - Responsive Too!
DigitalOcean channel
*/
