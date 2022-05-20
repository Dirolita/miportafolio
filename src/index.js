
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Aboutme from './pages/Aboutmejs';
import Jobs from './pages/Jobs';
import Error404 from './pages/Error404';
import Skills from './pages/skills ';
import Studies from './pages/Studies';
import EstCompl from './pages/EstudioCompl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about-me' element={<Aboutme/>}></Route>
      <Route path='/jobs' element={<Jobs/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/studies' element={<Studies/>}></Route>
      <Route path='*' element={<Error404/>}></Route>
      <Route path='/home' element={<Navigate replace to={"/"}/>}></Route>
      <Route path='/studies/:id' element={<EstCompl/>}></Route>
    </Routes>
</ BrowserRouter>
);



