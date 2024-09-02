import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
function App() {
 

  return (
  <>
  <BrowserRouter>
  <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}></Route>
 </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
