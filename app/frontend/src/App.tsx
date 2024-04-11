import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio'
import Filmes from './pages/filmes'
import Atores from './pages/atores'
import CreateFilms from './pages/createFilms'
import CreateAtores from './pages/CreateAtores'

function App() {

  return (
    <Routes>
      <Route path='/filmes/createFilms' element={<CreateFilms/>}/>
      <Route path='/filmes' element={<Filmes/>}/>
      <Route path='/atores/createAtores' element={<CreateAtores/>}/>
      <Route path='/atores' element={<Atores/>}/>
      <Route path='/' element={<Inicio/>}/>
      <Route path='*' element={<Navigate to='/' />}/>

    </Routes>
  )
}

export default App
