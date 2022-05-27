import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Loging/Login';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Loging/SignUp/SignUp';
import RequireAuth from './Pages/Loging/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/tools/:id' element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
