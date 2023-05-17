import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* navbar goes here */}
      <nav className="bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a
                  href="#"
                  className="flex items-center space-x-1 py-5 px-3 text-gray-700"
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
                  <span>Better Dev</span>
                </a>
              </div>
              {/* primary nav */}
              <div className="flex items-center space-x-1">
                <a href="#" className="py-5 px-3 text-gray-700">
                  Features
                </a>
                <a href="#" className="py-5 px-3 text-gray-700">
                  Pricing
                </a>
              </div>
            </div>
            {/* secundary nav */}
            <div className="flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Login
              </a>
              <a
                href="#"
                className="py-3 px-3 bg-yellow-400 text-yellow-900 rounded"
              >
                Signup
              </a>
            </div>
          </div>
        </div>
        {/* mobile menu */}
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
