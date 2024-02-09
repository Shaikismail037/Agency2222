import { useEffect, useState } from "react";
import { logo, plogo } from "./assets/images/index";
import { Link } from "react-scroll";
import { FaX, FaBars } from "react-icons/fa6";
import { navLinks } from "./constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set Toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  // Nav items array
            


  return (
    <header className="bg-white w-full h-20 md:bg-transparent relative top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a href="" className="mt-2">
            <img src={logo} alt="Logo" />
          </a>

          {/* nav items for large devices  */}
          <ul className=" md:flex space-x-12 hidden">
            {navLinks.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                className="block text-base text-gray-900 hover:text-primary first:font-medium cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Button for large Devices */}
          <div className=" space-x-12 hidden lg:flex item-center">
            <button className="bg-primary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Call US
            </button>
          </div>

          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaX className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars />
              )}
            </button>
          </div>
        </div>

        {/*  nav list for Mobile Devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-primary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navLinks.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              className="block text-base text-white hover:text-neutralDGrey first:font-medium cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
      <div className="mt-20 z-1"></div>
    </header>
  );
};

export default Navbar;
