import "./App.css";
import TopBar from "./components/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/users/signin";
import Signup from "./components/users/signup";
import Profile from "./components/users/profile";
import Edit from "./components/users/edit";
import Home from "./pages/Home";
import UserTable from "./components/users/allUsers";
import UserDeatils from "./components/users/userDetailsPage";
import Reviews from "./components/users/reviews";
import SearchPage from './pages/search'
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <Router>
      <div className='d-flex flex-column'>
        <TopBar />
      <Routes>
      <Route path="/"         element={<Home/>}/>
        <Route path="/home"         element={<Home/>}/>
         <Route path='/search' element={<SearchPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/UserDeatils" element={<UserDeatils />}/>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/users" element={<UserTable/>} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path="reviews" element={<Reviews/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
