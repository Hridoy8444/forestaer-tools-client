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
import MyOrder from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageTools from './Pages/Dashboard/ManageTools';
import AddTools from './Pages/Dashboard/AddTools';
import AddReview from './Pages/Dashboard/AddReview';
import Blogs from './Pages/Blogs/Blogs';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import EditProfile from './Pages/Dashboard/EditeProfile';
import NotFound from './Pages/NotFound/NotFound ';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='/tools/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>
        {/* <Route path='/payment/:id' element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }></Route> */}
        <Route path='/dashboard/profile/editprofile' element={
          <RequireAuth>
            <EditProfile />
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='managetools' element={<ManageTools></ManageTools>}></Route>
          <Route path='addtools' element={<AddTools></AddTools>}></Route>
          
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
