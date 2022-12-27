import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='flex justify-evenly text-xl py-4'>
      <NavLink                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
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
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
