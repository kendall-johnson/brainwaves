import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    function handleLogOut() {
        userService.logOut();
        updateUser(null);
      }
  return (
    <>
    <nav className="w-16 h-full overflow-hidden text-gray-400 bg-gray-900 rounded">
      <Link to="/" className="flex items-center justify-center mt-3" >
      <img src="https://i.imgur.com/OFSvrLJ.png" className="w-12 h-12 object-contain"></img>
      </Link>
      <div className="flex flex-col items-center mt-3 border-t border-gray-700">
      <Link to="/"
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
          <svg
            className="w-6 h-6 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
        <Link to="/moods"
          className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
          href="#"
        >
           <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
      <path 
        strokeLinecap="round"
        strokeLinejoin="round"
        // strokeWidth={2} 
        d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31 0-3.86-3.12-7-7-7m4 5.83c0 1.54-1.36 2.77-3.42 4.64L13 14l-.58-.53C10.36 11.6 9 10.37 9 8.83c0-1.2.96-2.19 2.16-2.2h.04c.69 0 1.35.31 1.8.83.45-.52 1.11-.83 1.8-.83 1.2-.01 2.2.96 2.2 2.16v.04z" />
    </svg>
</Link>
<Link to="/moods/new"
       className="flex items-center justify-center w-12 h-12 mt-2 text-gray-200 bg-gray-700 rounded"
       
     >
<svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 16 16"
        stroke="currentColor"
    >
      <path 
        fillRule="evenodd"
        d="M8 2a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 018 2z"
      />
    </svg>
</Link>
</div>
<div className="flex flex-col items-center mt-2 border-t border-gray-700">
<Link to=""
       className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-gray-700 hover:text-gray-300"
       onClick={handleLogOut}
     >
<svg
         className="w-6 h-6 stroke-current"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
       >
<path stroke="none" d="M0 0h24v24H0z" />
      <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
      <path d="M7 12h14l-3-3m0 6l3-3" />
    </svg>
</Link>
</div>
</nav>
</>

);
};