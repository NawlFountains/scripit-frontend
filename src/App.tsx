import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PDF from './pages/pdf'
import Letterboxd from './pages/letterboxd'

function App() {

  return (
	  <BrowserRouter>
		<Routes>
		  <Route path='/' element={<Home/>}/>
		  <Route path='/pdf' element={<PDF/>}/>
		  <Route path='/letterboxd' element={<Letterboxd/>}/>
		</Routes>
	</BrowserRouter>
  )
}

export default App
