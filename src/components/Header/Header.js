import React from 'react'
export const Header = () => {
    return (
    <header className="p-5">
    <nav className="flex gap-6">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'text-[orange] font-bold' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-[orange] font-bold' : ''
        }
        to="/movies"
      >
        Search Movie
      </NavLink>
    </nav>
  </header>
);
};
