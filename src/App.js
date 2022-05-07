import { Route, Routes } from 'react-router-dom';
import './App.css'
import Blogs from "./Component/Blogs/Blogs";
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import LogIn from './Component/LogInSignUp/LogIn/LogIn';
import SignUp from './Component/LogInSignUp/SignUp/SignUp';
import PageNotFound from "./Component/PageNotFound/PageNotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventory from './Component/Inventory/Inventory';
import RequireAuth from './Component/LogInSignUp/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/inventory/:name' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
