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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import Users from './Pages/Dashboard/Users/Users';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import ManageTools from './Pages/Dashboard/ManageTools/ManageTools';
import AddTools from './Pages/Dashboard/AddTools/AddTools';

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

<Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='managetools' element={<ManageTools></ManageTools>}></Route>
          <Route path='addtools' element={<AddTools></AddTools>}></Route>
        </Route>

      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
