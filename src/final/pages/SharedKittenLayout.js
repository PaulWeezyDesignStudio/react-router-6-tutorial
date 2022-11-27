import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <h2>Let the cuteness begin..</h2>
      <Outlet />
    </>
  );
};
export default Home;
