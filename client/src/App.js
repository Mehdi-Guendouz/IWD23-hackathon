import './App.scss';
import {BrowserRouter, Route , Routes , Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Treatment from './components/Treatment/Treatment';


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
        <Route path='/content' element={<Treatment />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
