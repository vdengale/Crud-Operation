import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/pages/Home';
import AddUser from './components/pages/AddUser';
import EditUser from './components/pages/EditUser';
import SearchUser from './components/pages/SearchUser';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser/>} />
        <Route path="/searchuser" element={<SearchUser/>} />
        <Route path="/editUser/:id" element={<EditUser/>} />
      </Routes>
    </>
  );
}

export default App;
