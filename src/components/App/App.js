import './App.scss';
import Header from '../Header/Header';
import Tools from '../Tools/Tools';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tools" element={<Tools />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
