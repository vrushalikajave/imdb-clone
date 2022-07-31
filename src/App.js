
import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movielist/MovieList';
import Movie from './pages/movieDetails/Movie';


function App() {
  return (
    <div className="App">
      <Header/>

    <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='movie/:id' element={<Movie/>}></Route>
        <Route path='movies/:type' element={<MovieList/>}></Route>
        <Route path='/*' element={<h1> err</h1>}></Route>
       
      </Routes>

    
    </div>
  );
}

export default App;
