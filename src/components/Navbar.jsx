import { useState } from 'react';
import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/TF-logo-bg.png" alt="Thanks Dad Logo" className="h-20 w-30 object-contain" />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/create" className="text-gray-700 hover:text-green-600">Create Card</Link>
          <Link to="/wall" className="text-gray-700 hover:text-green-600">Gratitude Wall</Link>
        </div>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
          {menuOpen ? <X className="h-6 w-6 text-red-800" /> : <Menu className="h-6 w-6 text-green-600" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2">
          <Link to="/create" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>
            Create Card
          </Link>
          <Link to="/wall" className="block text-gray-700 hover:text-green-600" onClick={toggleMenu}>
            Gratitude Wall
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;