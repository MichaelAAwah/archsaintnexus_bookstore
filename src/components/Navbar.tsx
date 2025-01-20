import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className='mx-8 text-green'>
        <div className="flex justify-between py-4">
          <a href="tel:+91 8374902234">+91 8374902234</a>

          <div className="flex space-x-4 text-primary">
            <a href="#">F</a>
            <a href="#">I</a>
            <a href="#">L</a>
            <a href="#">T</a>
            <a href="#">N</a>
          </div>
        </div>

        <hr className="border-2" />

        <div className="grid grid-cols-12 gap-4 items-center py-4">
          <div className="col-span-2">
            <div className="rounded-full w-20 h-20 bg-gray-800">

            </div>
          </div>
          <div className="col-span-6 items-center">
            <input type="search" className="w-full bg-gray-200 rounded-3xl p-2 px-4" placeholder="Search Books" />
          </div>
          <div className="col-span-4 items-center">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="border-e-2 border-gray text-center">
                  <Link to="/" className="inline-block px-2 uppercase">Home</Link>
                </div>
                <div className="border-e-2 border-gray text-center">
                  <Link to="/" className="inline-block px-2 uppercase">About Us</Link>
                </div>
                <div className="text-center">
                  <Link to="/" className="inline-block px-2 uppercase">Books</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-green">
        <div className="grid grid-cols-6 gap-2">
          <div className="border-e-2 border-white text-center p-2">
            <Link to="/" className="inline-block px-2 text-white font-bold uppercase">Home</Link>
          </div>
          <div className="border-e-2 border-white text-center p-2">
            <Link to="/" className="inline-block px-2 text-white uppercase">About Us</Link>
          </div>
          <div className="border-e-2 border-white text-center p-2">
            <Link to="/" className="inline-block px-2 text-white uppercase">Books</Link>
          </div>
          <div className="border-e-2 border-white text-center p-2">
            <Link to="/" className="inline-block px-2 text-white uppercase">New Release</Link>
          </div>
          <div className="border-e-2 border-white text-center p-2">
            <Link to="/" className="inline-block px-2 text-white uppercase">Contact Us</Link>
          </div>
          <div className="text-center p-2">
            <Link to="/" className="inline-block px-2 text-white uppercase">Blog</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
