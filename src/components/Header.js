import Logo from "../assets/Trivselbil-logo.png";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";
export const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <>
      <nav class="p-5 md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center ">
          <span className="ml-12">
            <img class="h-16 inline" src={Logo} />
          </span>

          <span class="text-3xl cursor-pointer mx-2 md:hidden block">
            <AiOutlineMenu
              onClick={showMenu}
              className="text-white"
              name="menu"
            ></AiOutlineMenu>
          </span>
        </div>

        <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
          <li class="mx-4 my-6 md:my-0 font-inter text-white ">
            <Link to="/">Hem</Link>
          </li>
          <li class="mx-4 my-6 md:my-0 font-inter text-white">
            <Link to="/vara-tjanster">Våra Tjänster</Link>
          </li>
          <li class="mx-4 my-6 md:my-0 font-inter text-white">
            <Link to="/om-oss">Om oss</Link>
          </li>
          <li class="mx-4 my-6 md:my-0 font-inter text-white">
            <HashLink smooth to="/#contact">
              {" "}
              Kontakta
            </HashLink>
          </li>
        </ul>
      </nav>

      {toggleMenu && (
        <nav className="transition-all ease-in fixed top-0 right-0 bottom-0 left-0 backdrop:-blur-sm z-10">
          <ul className="absolute top-0 right-0 bottom-0 w-6/12 lg:w-1/6  md:w-1/4  py-4 bg-bgBlack/[0.8] drop-shadow-2xl z-10">
            <button onClick={closeMenu} className="block p-4">
              <AiOutlineClose className="h-6 w-6 text-white absolute top-2 left-2" />
            </button>
            <li className="border-b border-pGray">
              <Link
                to="/"
                className="p-4 flex items-center font-inter text-white gap-2.5 hover:bg-slate-300"
                onClick={closeMenu}
              >
                Hem
              </Link>
            </li>
            <li className="border-b border-pGray hover:bg-slate-300">
              <Link
                to="/vara-tjanster"
                className="block p-4 font-inter text-white"
                onClick={closeMenu}
              >
                Våra Tjänster
              </Link>
            </li>
            <li className="border-b border-pGray hover:bg-slate-300">
              <Link
                to="/om-oss"
                className="block p-4 font-inter text-white"
                onClick={closeMenu}
              >
                Om oss
              </Link>
            </li>
            <li className="border-b border-pGray hover:bg-slate-300">
              <HashLink
                className="block p-4 font-inter text-white"
                onClick={closeMenu}
                smooth
                to="/#contact"
              >
                {" "}
                Kontakta
              </HashLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
