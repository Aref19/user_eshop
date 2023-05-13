
import Navbarcsss from '../css/Nav.module.css'
import userImage from '../assest/user.png'
import { useState, useEffect } from 'react';
import { IoHeart } from 'react-icons/io5';

const Navbar = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 768 && setOpenNav(false)
        );
    }, []);


    return (
        <>
            <nav className={`bg-neutral-400  md:flex  justify-between md:text-center  shadow     flex  `}>
             
                <div className='md:text-center flex justify-center '>
                    <img className=' max-w-10 max-h-10  rounded-full md:relative md:top-0  relative  border-neutral-700 bg-white p-1 m-2 md:m-1'
                 src={userImage} />
                </div>

                <div className={` md:flex text-center w-96 justify-end md:m-1 ${ openNav ? "block" : "hidden"} transition-all ease-in duration-500`}>
                    <ul className={` md:flex  m-2  ${ openNav ? "block" : "hidden"} `}>
                        <a href='#'> <li className="mx-2 hover:text-cyan-500 duration-500 my-6 md:my-0">Main</li></a>
                        <a href='#'> <li className="mx-2 hover:text-cyan-500 duration-500 my-6 md:my-0">Account</li></a>
                    </ul>
                </div>

                <div className="mr-2 flex md:hidden h-50 mt-2' ">
              <button
                onClick={() =>{ 
                    setOpenNav(!openNav) 
                     console.log(openNav);
                }}
                type="button"
                className={`bg-gray-900 inline-flex h-10 relative   ${ openNav ? "top-3" : "top-2"} items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white `}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!openNav ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              </div>

            </nav>

        </>
    )
}
export default Navbar;