import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ForgetPassword from './pages/ForgetPassword';
import UIGenerator from './pages/UIGenerator';
import WebCode from './pages/WebCode';
import MobileCode from './pages/MobileCode';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/reset password" element={<ForgetPassword/>} />
            <Route element={<Home /> }>
              <Route path="/home" element={<UIGenerator />} />
              <Route path="/web" element={<WebCode />} />
              <Route path="/mobile" element={<MobileCode />} />
              
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
