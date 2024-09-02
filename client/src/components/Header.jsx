import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 border-gray-300 shadow-sm bg-gray-50">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-lg font-semibold sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-400 rounded-md text-white">
          FreePen
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button
        className="w-12 h-12 lg:hidden"
        gradientDuoTone="greenToBlue"
        pill
      >
        <AiOutlineSearch className="text-xl mt-1 text-gray-100" />
      </Button>
      <div className="flex items-center gap-2 md:order-2">
        <Button color={"gray"} className="w-12 h-10 hidden sm:inline" pill>
          <FaMoon className="text-lg" />
        </Button>
        <Button gradientDuoTone="greenToBlue" outline>
          <Link to={"/sign-in"}>Sign In </Link>
        </Button>
        <Navbar.Toggle className="border border-gray-500" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"} className="text-lg">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"} className="text-lg">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to={"/projects"} className="text-lg">
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
