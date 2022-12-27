import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar'
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
    const { openSidebar, openModal } = useGlobalContext();

  return (
    <nav className='grid grid-cols-2 md:grid-cols-4 items-center px-[7%] py-5 text-xl'>
    <div className=''>
    <NavLink                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
    </div>
    <div className='hidden md:col-span-2 md:flex md:justify-evenly '>
    <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/kittens'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Kittens
      </NavLink>
      <NavLink
        to='/resources'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Resources
      </NavLink>
    </div>
    <div className='hidden md:flex md:justify-end'>
    <NavLink
        to='/contact'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
      <button 
      className=' px-7 py-2.5 bg-black text-white rounded'>
        Contact
        </button>
      </NavLink>
    </div>
    <div className='md:hidden flex justify-end'>
    <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
    </button>
        <Sidebar />
    </div>
      
      
   
    </nav>
  );
};
export default Navbar;
