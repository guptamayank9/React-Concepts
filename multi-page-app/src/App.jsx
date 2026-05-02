
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Weather from './pages/Weather';





const App = () => {
  return (
    <div>
      {/*Navbar*/}
      <nav className='flex gap-4 bg-gray-800 text-white p-4'>
        <Link to='/'>Home</Link>
        <Link to ='/weather'>Weather</Link>
         <Link to ='/about'>About</Link>
      </nav>
          {/* Routes */}
          <div className="p-4">
          <Routes>
            <Route path='/' element ={<Home/>}/>
             <Route path='/weather' element ={<Weather/>}/>
              <Route path='/about' element ={<About/>}/>
          </Routes>
          </div>
    </div>
  )
}

export default App
