import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Kittens from './pages/Kittens';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';
import SingleKitten from './pages/SingleKitten';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import SharedKittenLayout from './pages/SharedKittenLayout';
function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='products' element={<SharedKittenLayout />}>
            <Route index element={<Kittens />} />
            <Route path=':kittenId' element={<SingleKitten />} />
          </Route>

          <Route path='login' element={<Login setUser={setUser}></Login>} />
          <Route
            path='dashboard'
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
