import './App.scss';
import Header from '../Header/Header';
import Tools from '../Tools/Tools';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Targets from '../Targets/Targets';
import CreatePosts from '../CreatePosts/CreatePosts';
import Calculator from '../Calculator/Calculator';
import Purchase from '../Purchase/Purchase';
import Main from '../Main/Main';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/finance-frontend" element={<Main />} />
      </Routes>
      <Routes>
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Routes>
        <Route path="/targets" element={<Targets />} />
      </Routes>
      <Routes>
        <Route path="/blog" element={<CreatePosts />} />
      </Routes>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Routes>
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
