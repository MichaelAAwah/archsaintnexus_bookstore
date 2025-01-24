import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className='mx-8 text-green'>
        <div className="flex justify-between py-4">
          <a href="tel:+91 8374902234" className="inline-flex items-center"><img className="inline-block w-[13.6px] h-[13.6px] mt-1" src="assets/images/icons/nav-phone-dark.svg" alt="phone icon" />+91 8374902234</a>

          <div className="flex items-center space-x-8 text-primary">
            <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-fb-dark.svg" alt="facebook icon" /></a>
            <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-insta-dark.svg" alt="instagram icon" /></a>
            <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-lin-dark.svg" alt="linked in icon" /></a>
            <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-tw-dark.svg" alt="twitter icon" /></a>
            <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-soc-dark.svg" alt="social icon" /></a>
          </div>
        </div>

        <hr className="border-2" />

        <div className="grid grid-cols-12 gap-4 items-center py-4">
          <div className="col-span-2">
            <div className="rounded-full w-20 h-20 bg-gray-800">

            </div>
          </div>
          <div className="col-span-5 items-center">
            <input type="search" className="w-full bg-gray-200 rounded-3xl p-2 px-4" placeholder="Search Books" />
          </div>
          <div className="col-span-5 items-center">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-2">
                <div className="border-e-2 border-gray text-center">
                  <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-account.svg" alt="" />Home</Link>
                </div>
                <div className="border-e-2 border-gray text-center">
                  <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-cart.svg" alt="" />About Us</Link>
                </div>
                <div className="text-center">
                  <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-wishlist.svg" alt="" />Books</Link>
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
