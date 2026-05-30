import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LetterboxdWatchlist from './pages/LetterboxdWatchlist'
import LetterboxdIntersect from './pages/LetterboxdIntersect'
import PdfSplitter from './pages/PdfSplitter'
import Layout from './components/Layout'

function App() {

  return (
	  <BrowserRouter>
		<Routes>
		<Route element={<Layout/>}>
		  <Route path='/' element={<Home/>}/>
		  <Route path='/PdfSplitter' element={<PdfSplitter/>}/>
		  <Route path='/LetterboxdWatchlist' element={<LetterboxdWatchlist/>}/>
		  <Route path='/LetterboxdIntersect' element={<LetterboxdIntersect/>}/>
		</Route>
		</Routes>
	</BrowserRouter>
  )
}

export default App
