import './App.scss';
import {BrowserRouter, Route , Routes , Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Treatment from './components/Treatment/Treatment';
import {DoctorProfile} from './pages/DoctorProfile';
import { ChatPage } from './pages/ChatPage';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';



function App() {

  const Layout = () =>{
    return(
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/doctor' element={<DoctorProfile/>} />
      </Route>

        <Route path='/chat' element={<ChatPage/>} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
