import FooterOrange from "@/components/footerOrange";
import Navbar from "@/components/Navbar";
import usePageTitle from "@/hooks/usePageTitle";

const newReleases = [
  {
    name: 'Simple way of piece life',
    price: '40.00',
    author: 'Armor Ramsey',
    image: 'assets/images/home/home-release-book-1.png'
  },
  {
    name: 'Great travel at desert',
    price: '38.00',
    author: 'Sanchit Howdy',
    image: 'assets/images/home/home-release-book-2.png'
  },
  {
    name: 'The lady beauty Scarlett',
    price: '45.00',
    author: 'Arthur Doyle',
    image: 'assets/images/home/home-release-book-3.png'
  },
  {
    name: 'Once upon a time',
    price: '35.00',
    author: 'Klien Marry',
    image: 'assets/images/home/home-release-book-4.png'
  },
]

const blogs = [
  {
    title: 'Reading books always makes the moments happy',
    image: 'assets/images/about/blog-1.png'
  },
  {
    title: 'Reading books always makes the moments happy',
    image: 'assets/images/about/blog-2.png'
  },
  {
    title: 'Reading books always makes the moments happy',
    image: 'assets/images/about/blog-3.png'
  },
]

export default function Books() {
  usePageTitle('Books')
  return (
    <div>
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-128 books-hero-gradient text-green mb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center p-4 ps-14">
            <div className="h-max">
              <h1 className="capitalize text-5xl mb-8">ipsum dolor si</h1>
              <p className="capitalize text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
              <button className="outline w-[197px] h-[61px] mt-8 rounded-md">Read More</button>
            </div>
          </div>
          <div className="flex justify-end">
            <img src="assets/images/books/hero.png" alt="books" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="min-h-128 py-20 px-8 text-blue my-8">
        <div className="grid grid-cols-2 gap-4">
          {/* Left */}
          <div>
            <div className="flex items-center">
              <hr className="inline-block my-auto me-4 w-8 border-t-2 border-orange" /> 
              <h5 className='text-orange'>Categories</h5>
            </div>
            <h3 className="text-blue font-bold text-[32px]">Expore Our Top Categories</h3>
          </div>

          {/* Right */}
          <div>
          </div>
        </div>
        

        <div className="grid grid-cols-3 gap-14 mt-10">
          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/higher-education-books.png" alt="higher education" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Higher Education</h2>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/management-books.png" alt="management" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Management Books</h2>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/engineering-books.png" alt="engineering" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Engineering Books</h2>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <button className="outline w-[197px] h-[51px] mt-4 rounded-md flex justify-center items-center gap-2">View More <img src="assets/images/icons/btn-arrow.svg" alt="arrow" /></button>
          </div>
        </div>
      </section>

      {/* Book Releases */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 bg-[#FCECEC]" id='new-release'>
        <h5 className="text-[13px] mb-4 text-center text-[#7A7A7A]">Some quality items</h5>
        <div className="flex justify-center items-center">
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
          <h3 className="text-[48px] text-center px-4">New Release Books</h3>
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
        </div>
      
        <div className="grid grid-cols-4 gap-20 mt-12">
          {newReleases.map((book, index) => (
            <div key={index}>
              <div className="book-card-shadow bg-white p-4 mb-6 flex justify-center">
                <img src={book.image} alt="book cover" className="" />
              </div>

              <div className="text-center">
                <h3 className="text-[22px] capitalize">{book.name}</h3>
                <h5 className="text-[14px] text-gray capitalize">{book.author}</h5>
                <h5 className="text-[18px] mt-2 text-orange">$ {book.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Book */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 featured-book-gradient">
        <div className="grid grid-cols-2 gap-20 mt-12">
          <div className="p-12">
            <div className="flex justify-center">
              <img src="assets/images/home/featured-book.png" alt="" className="" />
            </div>
          </div>
          <div className="p-12 flex justify-center items-center">
            <div className="h-max">
              <h2 className="text-[48px] mb-8">Featured Book</h2>
              <div className="mb-6">
                <hr className="w-24 border-t-2 mb-2 border-orange" />
                <h5 className="text-[13px] text-gray uppercase">By Timbur Hood</h5>
              </div>
              <h2 className="text-[28px] mb-6">Birds Gonna Be Happy</h2>
              <p className="text-[#7A7A7A] text-xl mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <h4 className="text-orange text-[23px]">$ 45.00</h4>

              <button className="mt-6 w-[198px] h-[61px] outline border border-[#393280] rounded-md">View More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Discount */}
      <section className="px-8 text-blue bg-[#FCEBEA] m-16 rounded-[20px]">
        <div className="grid grid-cols-2 gap-2">
          {/* Left */}
          <div className='flex flex-col justify-center'>
            <h3 className="text-blue font-bold text-3xl mb-4">All books are 50% off now! Don't miss such a deal!</h3>
            <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
            <div className="mt-4 flex gap-4">
              <div className="text-center">
                <span className="block text-orange font-bold text-xl">768</span>
                <span className="block uppercase text-xl">Days</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-xl">01</span>
                <span className="block uppercase text-xl">hours</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-xl">27</span>
                <span className="block uppercase text-xl">min</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-xl">55</span>
                <span className="block uppercase text-xl">sec</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <img src="assets/images/home/discount.png" alt="ebooks" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="min-h-128 py-20 px-8 pt-0 my-8 bg-[#FCEBEA] flex justify-center items-start relative" id='blog'>
        <div className="bg-orange text-white flex justify-center items-center p-20 min-w-3/4 relative">
          <div>
            <h3 className="capitalize mb-4 text-center text-5xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-center text-md">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet,<br/> consectetur. Elit adipiscing enim pharetra hac.</p>
          </div>
        
          <div className="absolute inset-x-0 -bottom-10 mx-auto w-fit z-2">
            <div className="grid grid-cols-12 place-content-center p-4 bg-white">
              <div className="col-span-1">
                <div className="flex justify-center items-center border border-[#DFDFDF] p-4">
                  <img src="assets/images/icons/mail-icon.png" alt="mail icon" />
                </div>
              </div>
              <div className="col-span-8">
                <input type="email" className="w-full p-4 px-4 bg-white" placeholder="youremail123@gmail.com" />
              </div>
              <div className="col-span-3">
                <button className="bg-orange text-white w-full p-4">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Ornaments */}
        <div className="absolute top-0 left-0 z-[2]">
          <img src="assets/images/books/ornament-top-left.png" alt="ornament" className="" />
        </div>

        <div className="absolute bottom-0 left-0 z-[2]">
          <img src="assets/images/books/ornament-bottom-left.png" alt="ornament" className="" />
        </div>

        <div className="absolute bottom-0 right-0 z-[2]">
          <img src="assets/images/books/ornament-bottom-right.png" alt="ornament" className="" />
        </div>

      </section>

      {/* Articles */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 bg-[#F7FCFC]" id='blog'>
        <h5 className="text-[16px] mb-4 text-center text-[#7A7A7A]">Read our articles</h5>
        <div className="flex justify-center items-center">
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
          <h3 className="text-[38px] text-center px-4">Latest Articles</h3>
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
        </div>
      
        <div className="grid grid-cols-3 gap-20 my-12">
          {blogs.map((article, index) => (
            <div key={index}>
              <div className="flex justify-center">
                <img src={article.image} alt="article cover" className="w-full" />
              </div>

              <div className="">
                <span className="block my-4 text-[#74642F]">2 Aug, 2021</span>
                <h3 className="text-2xl text-[#173F5F] font-normal">{article.title}</h3>
                <hr className="border-[#C8C8C8] my-4" />
                <div className="flex justify-end items-center space-x-4 text-primary">
                  <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-fb-dark.svg" alt="facebook icon" /></a>
                  <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-tw-dark.svg" alt="twitter icon" /></a>
                  <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-insta-dark.svg" alt="instagram icon" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="my-6 w-[256px] h-[58px] outline border border-[#173F5F] text-[#173F5F] flex justify-center items-center gap-2 text-xl font-normal">Read All Articles <img src="assets/images/about/btn-arrow.svg" alt="" /></button>
        </div>
      </section>

      {/* Footer */}
      <FooterOrange />
    </div>
  )
}
