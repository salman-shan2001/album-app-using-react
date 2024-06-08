import logo from './logo.svg';
import './App.css';
import Addalbum from './components/Addalbum';
import SearchAlbum from './components/SearchAlbum';
import DeleteAlbum from './components/DeleteAlbum';
import AlbumView from './components/AlbumView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addalbum/>}/>
      <Route path='/SearchAlbum' element={<SearchAlbum/>}/>
      <Route path='/DeleteAlbum' element={<DeleteAlbum/>}/>
      <Route path='/AlbumView' element={<AlbumView/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
