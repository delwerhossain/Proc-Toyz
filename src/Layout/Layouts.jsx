import  { createContext } from 'react';
import {   Outlet } from "react-router-dom";
import Navbar from '../pages/common/Navbar/Menu';
import Footer from '../pages/common/Navbar/Footer';

let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "All Toys", link: "/all", id: 2 },
  { title: "Blogs", link: "/blogs", id: 3 }
];
export const NavContext = createContext({
  menuList: []
})

const Layouts = () => {
    return (
      <div className="">
        <NavContext.Provider value={{menuList}}>
          <Navbar ></Navbar>
          </NavContext.Provider>
          {/* outlet part  */}
          <Outlet></Outlet>
          <Footer></Footer>
      </div>
      );
    };

export default Layouts;