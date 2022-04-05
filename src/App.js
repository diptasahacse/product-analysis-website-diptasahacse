import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound'
import BlogDetails from './components/BlogDetails/BlogDetails';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/reviews/:reviewId' element={<ReviewDetails></ReviewDetails>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/:blogID' element={<BlogDetails></BlogDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
