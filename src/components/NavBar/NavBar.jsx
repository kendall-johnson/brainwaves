import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, updateUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <>
    <div className="flex h-screen">
      <div
        className={`bg-blue-500 text-white w-64 px-6 pt-4 pb-8 ${isMenuOpen ? '' : 'hidden'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <h1 className="text-2xl font-bold mb-4">Brainwaves</h1>
        <nav>
          <Link
            to="/moods"
            className="block py-2 px-4 rounded hover:bg-blue-600 hover:text-white mb-2"
          >
            Mood History
          </Link>
          <Link
            to="/moods/new"
            className="block py-2 px-4 rounded hover:bg-blue-600 hover:text-white mb-2"
          >
            New Mood
          </Link>
          <Link to="" className="block py-2 px-4 rounded hover:bg-blue-600 hover:text-white">
            Log Out
          </Link>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <nav className="bg-blue-500 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2 rounded"
                >
                  {isMenuOpen ? (
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} size="lg" />
                  )}
                </button>
              </div>
              <div className="flex items-center">
                <h2 className="text-white mr-4">Welcome, {user.name}</h2>
                <Link to="" className="text-white hover:text-gray-200" onClick={handleLogOut}>
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}
