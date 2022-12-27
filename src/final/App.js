import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css'
import Home from './pages/Home';
import { AppProvider } from './context';
import About from './pages/About';
import Kittens from './pages/Kittens';
import Error from './pages/Error';
import Contact from './pages/Contact'
import Resources from './pages/Resources';
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
    <AppProvider>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path='kittens' element={<SharedKittenLayout />}>
            <Route index element={<Kittens />} />
            <Route path=':kittenId' element={<SingleKitten />} />
          </Route>
            <Route path='resources' element={<Resources />} />
            <Route path='contact' element={<Contact />} />
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
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
