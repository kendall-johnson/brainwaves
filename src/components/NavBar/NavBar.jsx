import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, updateUser }) {

  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <nav className=" text-white h-16 flex items-center justify-between px-4">
    <h1 className="text-2xl font-bold">Brainwaves</h1>
    <div className="flex">
      <Link
        to="/moods"
        className="text-white hover:text-gray-200 ml-4"
      >
        Current Mood
      </Link>
      <Link
        to="/moods/new"
        className="text-white hover:text-gray-200 ml-4"
      >
        Track Your Mood
      </Link>
      <Link
        to=""
        onClick={handleLogOut}
        className="text-white hover:text-gray-200 ml-4"
      >
        Log Out
      </Link>
    </div>
  </nav>
  );
}
