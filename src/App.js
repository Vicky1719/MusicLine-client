import logo from "./logo.svg";
import "./App.css";
import Navbarr from "./paginas/Navbarr";
import { Routes, Route } from "react-router-dom";
import Signup from "./paginas/Signup";
import Login from "./paginas/Login";
import Home from "./paginas/Home";
import Error from "./paginas/Error";
import NotFound from "./paginas/NotFound";
import Profile from "./paginas/Profile";
import ProfileEdit from "./paginas/ProfileEdit";
import CreationCreate from "./paginas/CreationCreate";
import CreationList from "./paginas/CreationList";
import CreationDetail from "./paginas/CreationDetail";
import CreationEdit from "./paginas/CreationEdit";
import CommentEdit from "./paginas/CommentEdit";
import IsPrivate from "./paginas/IsPrivate";
import CommentCreate from "./paginas/CommentCreate";
import MisCreaciones from "./paginas/MisCreaciones";

function App() {
  return (
    <div className="App">
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
        <Route path="/profile/new-creation" element={<CreationCreate />} />
        <Route path="/creation/:creationId" element={<CreationDetail />} />
        <Route path="/creation" element={<CreationList />} />
        <Route path="/creation/:creationId/edit" element={<CreationEdit />} />
        <Route path="/creation/:commentId/edit" element={<CommentEdit />} />
        <Route
          path="/creation/:creationId/comment"
          element={<CommentCreate />}
        />

        <Route path="/profile/my-creation" element={<MisCreaciones />} />

        {/* errores */}

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
