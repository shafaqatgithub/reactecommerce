import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Us Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p className="text-sm">
              We are a leading e-commerce platform providing the best products for you.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul>
              <li><a href="/about" className="text-sm hover:underline">About Us</a></li>
              <li><a href="/contact" className="text-sm hover:underline">Contact</a></li>
              <li><a href="/faq" className="text-sm hover:underline">FAQ</a></li>
              <li><a href="/privacy" className="text-sm hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm hover:underline">Terms of Service</a></li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h5>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 rounded-r-lg hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-black">Facebook</a>
            <a href="#" className="hover:text-black">Twitter</a>
            <a href="#" className="hover:text-black">Instagram</a>
            <a href="#" className="hover:text-black">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
