import './App.scss';
import {BrowserRouter, Route , Routes} from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Layout />}>

      </Route> */}
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
