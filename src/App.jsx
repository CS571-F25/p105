import { HashRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home.jsx'
import AboutMe from './components/AboutMe'

function App() {
return<HashRouter>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutMe />} />
  </Routes>
</HashRouter>
   
}

export default App
