import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Protected/Checkout/Checkout';
import Login from './components/Protected/Login/Login';
import Register from './components/Protected/Register/Register';
import RequireAuth from './components/Protected/RequireAuth/RequireAuth';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App w-full h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/checkout/:id" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
