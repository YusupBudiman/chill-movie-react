import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex gap-4">
        <Link to="/login" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
