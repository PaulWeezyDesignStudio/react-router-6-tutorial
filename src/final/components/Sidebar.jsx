import React from 'react';

import { useGlobalContext } from '../context';
import './sidebar.css';
import { FaTimes, FaReact } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header w-100">
        <div className="flex items-center">
          <FaReact className="text-3xl mr-2" />
          <h2 className="font-bold text-center ">React app</h2>
        </div>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col gap-y-8  text-xl font-bold justify-center items-center h-1/2">
        <NavLink
          to="/"
          onClick={closeSidebar}
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Home
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/about"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          About
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/kittens"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Kittens
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/resources"
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Resources
        </NavLink>
        <NavLink
          onClick={closeSidebar}
          to="/contact"W
          className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >
          Contact
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
