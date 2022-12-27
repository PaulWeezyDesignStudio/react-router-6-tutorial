import { Outlet } from 'react-router-dom';

import StyledNavbar from '../components/StyledNavbar';
const Home = () => {
  return (
    <>
      <StyledNavbar />
      <main className='grid grid-cols-1 place-items-center h-screen'>
      <Outlet />
      </main>
    </>
  );
};
export default Home;
