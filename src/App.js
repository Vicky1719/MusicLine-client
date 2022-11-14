import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import {Routes, Route} from "react-router-dom";
import Signup from './paginas/Signup';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Error from './paginas/Error';
import NotFound from './paginas/NotFound';
import Profile from './paginas/Profile'
import CreationCreate from './paginas/CreationCreate';
import CreationList from './paginas/CreationList';
import CreationDetail from './paginas/CreationDetail';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/creation/create" element={<CreationCreate/>} />
        <Route path="/creation" element={<CreationList/>}/>
        <Route path="/creation/:creationId" element={<CreationDetail/>}/>

        {/* errores */}

        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

