// import React from "react";
// import { Link } from "react-router-dom";
// import { navigation } from "../constant";
// import header_logo from "../assets/svg/college_logo.svg";
// import call from "../assets/svg/call.svg";
// import email from "../assets/svg/email.svg";
// import { useAuth } from "../AuthContext";
// import { Facebook, Instagram, Youtube} from "lucide-react";

// const Header = () => {
//   const { isLoggedIn } = useAuth();
//   return (
//     <>
//       <header className="fixed w-full bg-color-1 h-[153px] z-10">
//         <div className="max-w-[1170px] w-full mx-auto">
//           <div className="flex justify-between items-center py-[20px]">
//             <Link to="/" className="flex gap-1 items-center">
//               <img src={header_logo} alt="logo" />
//               <span className="text-color-4 text-[1.5625rem] font-bold font-Inria uppercase">
//                 GVM Bsc IT
//               </span>
//             </Link>
//             <div className="flex gap-4">
//               <Link className="">
//               <Instagram  size={22} color="white" />
//               </Link>
//               <Link>
//               <Facebook  size={22} color="white" />
//               </Link>
//               <Link>
//               <Youtube  size={22} color="white" />
//               </Link>
//             </div>
//           </div>
//           <div>
//             <nav className="bg-color-9 border border-color-11 px-4 flex justify-between items-center">
//               <div className="  flex items-center gap-8">
//                 {navigation.map((item, index) => (
//                   <NavItem key={index} item={item} />
//                 ))}
//               </div>
//               <div className="flex gap-8 items-center">
//                 {isLoggedIn ? (
//                   <Link
//                     to="/profile"
//                     className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
//                   >
//                     Profile
//                   </Link>
//                 ) : (
//                   <>
//                     <Link
//                       to="/login"
//                       className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
//                     >
//                       Login
//                     </Link>
//                     <Link
//                       to="/registration"
//                       className="text-color-5 text-sm font-medium leading-[21px]  py-4 capitalize hover:text-color-4 duration-300"
//                     >
//                       Register
//                     </Link>
//                   </>
//                 )}
//               </div>
//             </nav>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// const NavItem = ({ item }) => {
//   return (
//     <>
//       <li className="relative group list-none">
//         <Link
//           key={item.id}
//           className="text-color-5 text-sm font-medium leading-[21px] flex gap-1 py-2 capitalize hover:text-color-4 duration-300"
//           to={item.url}
//         >
//           {item.title}
//           {item.icon && <img src={item.icon} alt="icon" />}
//         </Link>

//         {item.child && (
//           <ul className="absolute hidden group-hover:block bg-color-1 p-2 w-[130px]  text-nowrap border-t-2 border-color-3">
//             {item.child.map((childItem) => (
//               <NavItem key={childItem.id} item={childItem} />
//             ))}
//           </ul>
//         )}
//       </li>
//     </>
//   );
// };
// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../constant";
import header_logo from "../assets/svg/college_logo.svg";
import { useAuth } from "../AuthContext";
import { Facebook, Instagram, Youtube, Menu, X } from "lucide-react";

const Header = () => {
  const { isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className=" sticky top-0 w-full bg-color-1 h-[73px] md:h-[124px] z-10">
        <div className="max-w-[1170px] w-full mx-auto ">
          <div className="flex justify-between items-center py-4 md:py-[20px] ">
            <Link to="/" className="flex gap-1 items-center ">
              <img 
                src={header_logo} 
                alt="logo" 
                className="h-7 md:h-auto"
              />
              <span className="text-color-4 text-lg md:text-[1.5625rem] font-bold  uppercase">
                GVM Bsc IT
              </span>
            </Link>
            
            <div className="hidden md:flex gap-4">
              <Link to="https://www.instagram.com/gyanodayacollege_official" target="_blank">
                <Instagram size={22} color="white" />
              </Link>
              <Link to="#">
                <Facebook size={22} color="white" />
              </Link>
              <Link to="#">
                <Youtube size={22} color="white" />
              </Link>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} color="white" />
              ) : (
                <Menu size={24} color="white" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ">
            <nav className="bg-color-9 border border-color-11 px-4 flex justify-between items-center">
              <div className="flex items-center gap-8">
                {navigation.map((item) => (
                  <NavItem key={item.id} item={item} setIsMenuOpen={setIsMenuOpen} />
                ))}
              </div>
              <div className="flex gap-8 items-center">
                {isLoggedIn ? (
                  <Link
                    to="/profile"
                    className="text-color-5 text-sm font-medium leading-[21px] py-4 capitalize hover:text-color-4 duration-300"
                  >
                    Profile
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-color-5 text-sm font-medium leading-[21px] py-4 capitalize hover:text-color-4 duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      to="/registration"
                      className="text-color-5 text-sm font-medium leading-[21px] py-4 capitalize hover:text-color-4 duration-300"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden max-h-[300px] overflow-auto bg-color-1 z-20">
            <nav className="bg-color-9 p-4 border-t border-color-11">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <MobileNavItem key={item.id} item={item} setIsMenuOpen={setIsMenuOpen} />
                ))}
                <div className="pt-4 border-t border-color-11">
                  {isLoggedIn ? (
                    <Link
                      to="/profile"
                      className="block py-2 text-color-5 text-sm font-medium"
                    >
                      Profile
                    </Link>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <Link
                        to="/login"
                        className="block py-2 text-color-5 text-sm font-medium"
                      >
                        Login
                      </Link>
                      <Link
                        to="/registration"
                        className="block py-2 text-color-5 text-sm font-medium"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

// Desktop Nav Item Component
const NavItem = ({ item, setIsMenuOpen }) => {
  return (
    <li className="relative group list-none" onClick={()=> setIsMenuOpen(true)}>
      <Link
        className="text-color-5 text-sm font-medium leading-[21px] flex gap-1 py-2 capitalize hover:text-color-4 duration-300"
        to={item.url}
      >
        {item.title}
        {item.icon && <img src={item.icon} alt="icon" />}
      </Link>

      {item.child && (
        <ul className="absolute hidden group-hover:block bg-color-1 p-2 w-[130px] text-nowrap border-t-2 border-color-3">
          {item.child.map((childItem) => (
            <NavItem key={childItem.id} item={childItem} onClick={()=> setIsMenuOpen(true)}/>
          ))}
        </ul>
      )}
    </li>
  );
};

// Mobile Nav Item Component
const MobileNavItem = ({ item, setIsMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full overflow-scroll" >
      <Link
      
        to={item.url}
        className="flex justify-between items-center text-color-5 text-sm font-medium py-2 "
        onClick={(e) => {
          setIsMenuOpen(false)

          if (item.child) {
            e.preventDefault();
            setIsOpen(!isOpen);
          setIsMenuOpen(true)

          }
        }}
      >
        {item.title}
        {item.child && (
          <span className="ml-2">{isOpen ? "−" : "+"}</span>
        )}
      </Link>

      {item.child && isOpen && (
        <div className="pl-4">
          {item.child.map((childItem) => (
            <MobileNavItem key={childItem.id} item={childItem} setIsMenuOpen={setIsMenuOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;