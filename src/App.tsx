import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import Categories from './Components/Categories/Categories'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='*' element={<h1>Page not found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
