import { Link } from "react-router-dom";

export default function FooterOrange() {
  return (
    <div className="p-20 text-white my-8 bg-orange relative">
      <div className="grid grid-cols-12 gap-16 my-10">
        <div className="col-span-1"></div>
        <div className="col-span-3 flex flex-col justify-center">
          <img src="assets/images/logo-white.png" alt="logo" className="w-[83px] h-[87px] mb-4" />
          <p className="text-[18px] mb-10">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="flex justify-between gap-5">
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-fb-white.png" alt="facebook icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-lin-white.png" alt="linkedin icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-tw-white.png" alt="twitter icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-yu-white.png" alt="youtube icon" />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-3 flex flex-col gap-2">
          <h4 className="text-[20px] uppercase mb-8">Contact</h4>
          <Link to="/" className="text-[14px] uppercase">Home</Link>
          <Link to="/about" className="text-[14px] uppercase">About us</Link>
          <Link to="/books" className="text-[14px] uppercase">Books</Link>
          <a href="#ebooks" className="text-[14px] uppercase">Ebooks</a>
          <a href="#new-release" className="text-[14px] uppercase">New Release</a>
          <a href="#contact" className="text-[14px] uppercase">Contact Us</a>
          <a href="#blog" className="text-[14px] uppercase">Blog</a>
        </div>
        <div className="col-span-3 flex flex-col gap-2">
          <h4 className="text-[20px] uppercase mb-8">Important links</h4>
          <Link to="#" className="text-[14px]">Privacy Policy</Link>
          <Link to="#" className="text-[14px]">FAQs</Link>
          <Link to="#" className="text-[14px]">Terms of Service</Link>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-16">
        <div className="col-span-1"></div>
        <div className="col-span-3 flex flex-col justify-start">
          <span className="text-[16px] capitalize">&copy; 2022 Arihant. All rights reserved.</span>
        </div>
        <div className="col-span-5"></div>
        <div className="col-span-3 flex flex-col justify-end">
          <span className="text-[16px] capitalize text-end"><span className="">Privacy</span> | Terms of service</span>
        </div>
      </div>

      {/* Ornaments */}
      <div className="absolute top-0 left-0 z-[2]">
        <img src="assets/images/footer-ornament-top-left.png" alt="ornament" className="" />
      </div>

      <div className="absolute bottom-0 right-0 z-[2]">
        <img src="assets/images/footer-ornament-bottom-right.png" alt="ornament" className="" />
      </div>
    </div>
  )
}
