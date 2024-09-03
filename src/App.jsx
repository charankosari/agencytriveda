import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Jobs from './pages/Jobs'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Porfolio from './pages/Portolio'
function App() {
 

  return (
  <>
  <BrowserRouter>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/jobs' element={<Jobs/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/portfolio' element={<Porfolio/>}></Route>
 </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
