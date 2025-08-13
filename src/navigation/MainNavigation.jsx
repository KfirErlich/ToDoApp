
import React from 'react';
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
  <nav className="bg-blue-500 p-4">
    <div className="flex items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold border-2 border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:border-white transition-colors">
        My To-Do List
        </Link>
    </div>
  </nav>
  );
}

export default MainNavigation;
