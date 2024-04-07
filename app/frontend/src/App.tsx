import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/inicio'
import Filmes from './pages/filmes'
import Atores from './pages/atores'

function App() {

  return (
    <Routes>
      <Route path='/filmes' element={<Filmes/>}/>
      <Route path='/atores' element={<Atores/>}/>
      <Route path='/' element={<Inicio/>}/>
      <Route path='*' element={<Navigate to='/' />}/>

    </Routes>
  )
}

export default App
