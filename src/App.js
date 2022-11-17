import logo from './logo.svg';
import './App.css';
import Navbar from './paginas/Navbar';
import {Routes, Route} from "react-router-dom";
import Signup from './paginas/Signup';
import Login from './paginas/Login';
import Home from './paginas/Home';
import Error from './paginas/Error';
import NotFound from './paginas/NotFound';
import Profile from './paginas/Profile'
import ProfileEdit from './paginas/ProfileEdit';
import CreationCreate from './paginas/CreationCreate';
import CreationList from './paginas/CreationList';
import CreationDetail from './paginas/CreationDetail';
import CreationEdit from "./paginas/CreationEdit";
import IsPrivate from './paginas/IsPrivate'
import CommentCreate from './paginas/CommentCreate';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<IsPrivate><Profile/></IsPrivate>} />
        <Route path="/profile/edit" element={<ProfileEdit/>} />
        <Route path="/profile/new-creation" element={<CreationCreate/>} />
        <Route path="/creation/:creationId" element={<CreationDetail/>}/>
        <Route path="/creation" element={<CreationList/>} />
        <Route path="/creation/:creationId/edit" element={<CreationEdit/>}/>
        <Route path="/creation/comment" element={<CommentCreate/>}/>
       
        {/* errores */}

        <Route path="/error" element={<Error/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


