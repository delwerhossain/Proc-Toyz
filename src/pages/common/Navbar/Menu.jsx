import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { NavContext } from '../../../Layout/Layouts';
import { AuthContext } from '../../../provider/AuthProvider';

const Navbar = () => {
  const { menuList } = useContext(NavContext);
  const { user, signOutLog } = useContext(AuthContext);


  const handleSignOut = () => {
    console.log('logged out');
    return signOutLog()
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("jwt");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const menuPart = (
    <>
      {menuList && menuList.map((menu) => (
        <li key={menu.id}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active mr-5 mb-2 font-bold text-white"
                : "mr-5 mb-2 font-bold text-yellow-950"
            }
            to={menu.link}
          >
            {menu.title}
          </NavLink>
        </li>
      ))}
    </>
  );
  return (
    <div className="lg:w-11/12 mx-auto bg-gray-100/60  navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* main menu */}
            {menuPart}
            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "active mr-5 mb-2 font-bold text-white"
                      : "mr-5 mb-2 font-bold text-yellow-950"
                  }
                  to="/mytoys"
                >
                  My Toys
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link className="normal-case text-xl flex items-center justify-center">
          <img
            loading="lazy"
            className="md:w-32 w-20 mr-2 rounded-xl"
            src="https://i.ibb.co/bmXC6FR/ProcToyz.png"
            alt=""
          />
          <p className="hidden md:block font-extrabold lg:text-3xl text-xl text-[#112D4E] underline">
            Proc<span className="text-primary">Toyz</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuPart}
          {user && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active mr-5 mb-2 font-bold text-white"
                    : "mr-5 mb-2 font-bold text-yellow-950"
                }
                to="/mytoys"
              >
                My Toys
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-yellow-950 btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn  text-yellow-950 btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {user && (
          <>
            <div
              className="tooltip tooltip-bottom "
              data-tip={user?.displayName}
            >
              <img
                loading="lazy"
                className="w-12 mr-1 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
                title={user?.displayName}
              />
            </div>
            <div className="tooltip tooltip-bottom " data-tip="log Out">
              <div onClick={handleSignOut} className="btn   btn-primary p-2">
                <FiLogOut title="logOut"></FiLogOut>
              </div>
            </div>
          </>
        )}

        <div className="tooltip tooltip-bottom " data-tip="log In">
          {!user && (
            <Link className="btn btn-primary p-2" to={"/login"}>
              <FiLogIn title="logOut"></FiLogIn>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};


export default Navbar;