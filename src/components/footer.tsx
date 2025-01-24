
export default function Footer() {
  return (
    <div className="p-20 text-blue my-8 footer-gradient">
      <div className="grid grid-cols-12 gap-16 my-10">
        <div className="col-span-3 flex flex-col justify-center">
          <img src="assets/images/logo.png" alt="logo" className="w-[83px] h-[87px] mb-4" />
          <p className="text-[18px] mb-10">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <div className="flex justify-between gap-5">
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-fb.png" alt="facebook icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-lin.png" alt="linkedin icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-tw.png" alt="twitter icon" />
            </div>
            <div className="footer-icon">
              <img className="w-[40px] h-[40px]" src="assets/images/icons/footer-yu.png" alt="youtube icon" />
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-2 flex flex-col gap-2">
          <h4 className="text-[20px] uppercase text-orange mb-8">Contact</h4>
          <a href="#" className="text-[14px] text-blue uppercase">Home</a>
          <a href="#" className="text-[14px] text-blue uppercase">About us</a>
          <a href="#" className="text-[14px] text-blue uppercase">Books</a>
          <a href="#" className="text-[14px] text-blue uppercase">Ebooks</a>
          <a href="#" className="text-[14px] text-blue uppercase">New Release</a>
          <a href="#" className="text-[14px] text-blue uppercase">Contact Us</a>
          <a href="#" className="text-[14px] text-blue uppercase">Blog</a>
        </div>
        <div className="col-span-4 flex flex-col">
          <h4 className="text-[20px] uppercase text-orange mb-8">Latest news</h4>
          <div className="grid grid-cols-12 gap-2 mb-4">
            <div className="col-span-4">
              <img src="assets/images/footer-news-1.png" alt="news image" />
            </div>
            <div className="col-span-8 flex flex-col justify-center">
              <h5 className="text-orange text-[14px]">Nostrud exercitation</h5>
              <p className="text-[12px]">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <span className="text-[#F6D55C] text-[10px]">15 April 2022</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-4">
              <img src="assets/images/footer-news-2.png" alt="news image" />
            </div>
            <div className="col-span-8 flex flex-col justify-center">
              <h5 className="text-orange text-[14px]">Nostrud exercitation</h5>
              <p className="text-[12px]">Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <span className="text-[#F6D55C] text-[10px]">15 April 2022</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-blue">
        <span className="text-[16px] capitalize">&copy; 2022 Arihant. All rights reserved.</span>
        <span className="text-[16px] capitalize"><span className="text-orange">Privacy</span> | Terms of service</span>
      </div>
    </div>
  )
}
