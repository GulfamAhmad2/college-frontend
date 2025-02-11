import React from "react";
import { Link } from "react-router-dom";
import { TbSchool } from "react-icons/tb";
import { navigation } from "../constant";
import header_logo from "../assets/svg/college_logo.svg";
import call from "../assets/svg/call.svg";
import email from "../assets/svg/email.svg";
import Button from "./Button";
import { useAuth } from "../AuthContext";

const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className="fixed w-full  bg-color-1  h-[153px] z-10 ">
        <div className="max-w-[1170px] w-full mx-auto">
          <div className="flex justify-between items-center py-[20px]">
            <Link to="/" className="flex gap-1 items-center">
              <img src={header_logo} alt="logo" />
              <span className="text-color-4 text-[1.5625rem] font-bold font-Inria uppercase">
                Gyanodaya Bsc IT
              </span>
            </Link>
            <div className="flex flex-col gap-2">
              <Link className="flex gap-1 items-center text-color-10">
                <img src={email} alt="email-icon" />
                gyanodayainfo@gmail.com
              </Link>
              <Link className="flex gap-1 items-center text-color-10">
                <img src={call} alt="email-icon" />
                +91 32423 23423
              </Link>
            </div>
          </div>
          <div>
            <nav className="bg-color-9 border border-color-11 px-4 flex justify-between items-center">
              <div className="  flex items-center gap-8">
                {navigation.map((item, index) => (
                  <NavItem key={index} item={item} />
                ))}
              </div>
              <div className="flex gap-8 items-center">
                {isLoggedIn ? (
                  <Link
                    to="/profile"
                    className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
                  >
                    Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/registration"
                      className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* <div className="w-[1440px] mx-auto left-0 right-0 justify-between items-center flex">
          <Link className="text-[#050d2d] text-[1.5rem] uppercase font-bold flex items-center gap-2">
            <TbSchool style={{ width: "40px", height: "40px" }} /> gvm
          </Link>
          <div className="justify-start items-start gap-6 flex">
            
          </div>
          <div className="justify-start items-start gap-[11px] flex">
            <Button className=" bg-[#eeeeee]">Login</Button>
            <Button className=" text-white  bg-[#050d2d]  ">Register</Button>
          </div>
        </div> */}
      </header>
    </>
  );
};

const NavItem = ({ item }) => {
  return (
    <>
      <li className="relative group list-none">
        <Link
          key={item.id}
          className="text-color-5 text-sm font-medium leading-[21px] flex gap-1 py-2 capitalize hover:text-color-4 duration-300"
          to={item.url}
        >
          {item.title}
          {item.icon && <img src={item.icon} alt="icon" />}
        </Link>

        {item.child && (
          <ul className="absolute hidden group-hover:block bg-color-1 p-2 w-[130px]  text-nowrap border-t-2 border-color-3">
            {item.child.map((childItem) => (
              <NavItem key={childItem.id} item={childItem} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};
export default Header;
