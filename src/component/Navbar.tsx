
import Navbarcsss from '../css/Nav.module.css'
import userImage from '../assest/user.png'
import { useState ,useEffect} from 'react';

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
            <nav className="bg-neutral-400  md:flex  md:justify-between md:text-center  shadow  justify-center flex  ">
              
                <div className='text-center flex justify-center '>
                <img className=' max-w-10 max-h-10  rounded-full md:relative md:top-0  relative top-10 border-neutral-700 bg-white p-1 m-2 md:m-1
                transition-all ease-in duration-500
                ' src={userImage}/>
                </div>
           
                <div className='flex text-center md:w-96  md:justify-end md:m-1   '>
                    <ul className="md:flex  flex-row-reverse m-2   ">
                       <a href='#'> <li  className="mx-2 hover:text-cyan-500 duration-500 my-6 md:my-0">Main</li></a>
                       <a href='#'> <li  className="mx-2 hover:text-cyan-500 duration-500 my-6 md:my-0">Account</li></a>
                    </ul>
                </div>
               

            </nav>

        </>
    )
}
export default Navbar;