import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <img
              src={logo}
              alt="Dev Stack"
              className="w-36"
            />

            <p className="text-sm text-gray-500 mt-4 leading-6">
              Explore modern technologies and build your perfect development stack.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-gray-900">
                GitHub
              </a>

              <a href="#" className="hover:text-gray-900">
                Twitter
              </a>

              <a href="#" className="hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">
              Legal
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-900">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;