import Navbar from "./Components/Commons/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ViewStudent from './Pages/ViewStudent'
import AddStudent from './Pages/AddStudent'
import EditStudent from './Pages/EditStudent'
import NotFound from "./Pages/NotFound";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
        <ToastContainer/>
        <Router>
              <Navbar/>
              <Routes>
                  <Route exact path="/" element={<ViewStudent/>}/>
                  <Route  path="/addStudent" element={<AddStudent/>}/>
                  <Route  path="/editStudent/:id" element={<EditStudent/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
        </Router>
    </>
  );
}

export default App;
