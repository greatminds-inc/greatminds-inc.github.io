import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Greatminds Inc. Logo" className="h-10" />
            <span className="text-2xl font-bold text-gray-900">Greatminds Inc.</span>
          </Link>

          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}