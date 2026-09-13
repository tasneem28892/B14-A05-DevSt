import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-6">

        <div className="navbar-start">
          <div className="flex items-center gap-2">
            <img src={logo} />
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-2 text-sm">
            <li><a className="text-pink-600">Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        <div className="navbar-end gap-3">
          <button className="btn btn-ghost btn-sm">
            Sign In
          </button>

          <button className="btn btn-sm rounded-full text-white border-none bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;