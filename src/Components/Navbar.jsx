import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 bg-white border-b border-gray-100 px-6">

      <div className="navbar-start">
        <div className="flex items-center gap-2">

          <img
            src={logo}
            // className="w-10 h-10 object-contain"
          />

          {/* <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Dev Stack
          </h2> */}

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
  );
};

export default Navbar;