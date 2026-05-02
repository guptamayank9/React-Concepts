import { Link } from "react-router-dom";


const Navbar = () => {

  return (
    <nav className='flex justify-between bg-gray-800 text-white p-4'>
        <h1>E-Shop</h1>
        <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
