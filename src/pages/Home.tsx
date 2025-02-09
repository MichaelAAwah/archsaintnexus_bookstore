import { Link } from "react-router-dom";
import Footer from "@/components/footer";
import usePageTitle from "@/hooks/usePageTitle";
import BookSkeleton from "@/components/book-skeleton";
import { getBooks } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

// const newReleases = [
//   {
//     name: 'Simple way of piece life',
//     price: '40.00',
//     author: 'Armor Ramsey',
//     image: 'assets/images/home/home-release-book-1.png'
//   },
//   {
//     name: 'Great travel at desert',
//     price: '38.00',
//     author: 'Sanchit Howdy',
//     image: 'assets/images/home/home-release-book-2.png'
//   },
//   {
//     name: 'The lady beauty Scarlett',
//     price: '45.00',
//     author: 'Arthur Doyle',
//     image: 'assets/images/home/home-release-book-3.png'
//   },
//   {
//     name: 'Once upon a time',
//     price: '35.00',
//     author: 'Klien Marry',
//     image: 'assets/images/home/home-release-book-4.png'
//   },
// ]

const blogs = [
  {
    title: 'Learn about this week\'s top author',
    desc: 'Jump start your book reading by quickly check through the popular book categories...',
    image: 'assets/images/home/blog-1.png'
  },
  {
    title: 'Why we celebrate readers',
    desc: 'Jump start your book reading by quickly check through the popular book categories...',
    image: 'assets/images/home/blog-2.png'
  },
  {
    title: 'Toddlers can also read',
    desc: 'Jump start your book reading by quickly check through the popular book categories...',
    image: 'assets/images/home/blog-3.png'
  },
  {
    title: 'Get started on your game',
    desc: 'Jump start your book reading by quickly check through the popular book categories...',
    image: 'assets/images/home/blog-4.png'
  },
]

export default function Home() {
  usePageTitle('')
  const { data: books, isLoading: loadingBooks } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  });

  const newReleases = Array.isArray(books) ? [...books.slice(0, 4)] : []

  return (
    <div>
      {/* Navbar */}
      <div>
        <div className='text-green'>
          <div className="flex justify-between py-4 bg-[#393280] px-8">
            <a href="tel:+91 8374902234" className="inline-flex items-center text-white"><img className="inline-block w-[13.6px] h-[13.6px] mt-1" src="assets/images/icons/nav-phone-white.svg" alt="phone icon" />+91 8374902234</a>

            <div className="flex items-center space-x-8 text-primary">
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-fb-white.svg" alt="facebook icon" /></a>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-insta-white.svg" alt="instagram icon" /></a>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-lin-white.svg" alt="linked in icon" /></a>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-tw-white.svg" alt="twitter icon" /></a>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-soc-white.svg" alt="social icon" /></a>
            </div>
          </div>

          <hr className="border-2" />

          <div className="grid grid-cols-12 gap-4 items-center py-4 mx-8 border-b-2 border-[#E0E0E0]">
            <div className="col-span-2">
              <div className="rounded-full w-20 h-20 bg-[#C4C4C4]">

              </div>
            </div>
            <div className="col-span-5 items-center relative">
              <input type="search" className="w-full bg-[#F6F6F6] rounded-3xl p-2 px-4 pe-[18px]" placeholder="Search Books" />
              <img className="absolute top-3 right-2" src="assets/images/icons/nav-search.svg" alt="search icon" />
            </div>
            <div className="col-span-5 items-center">
              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-2">
                  <div className="border-e-2 border-gray text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-account.svg" alt="" />Account</Link>
                  </div>
                  <div className="border-e-2 border-gray text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-cart.svg" alt="" />Cart:(0$)</Link>
                  </div>
                  <div className="text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img src="assets/images/icons/nav-wishlist.svg" alt="" />Wishlist</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center sticky top-0 z-50 mt-4">
          <div className="grid grid-cols-6 gap-2">
            <div className="border-e-2 border-[#E0E0E0] text-center p-2">
              <Link to="/" className="inline-block px-2 text-orange font-bold uppercase">Home</Link>
            </div>
            <div className="border-e-2 border-[#E0E0E0] text-center p-2">
              <Link to="/about" className="inline-block px-2 text-dark uppercase">About Us</Link>
            </div>
            <div className="border-e-2 border-[#E0E0E0] text-center p-2">
              <Link to="/books" className="inline-block px-2 text-dark uppercase">Books</Link>
            </div>
            <div className="border-e-2 border-[#E0E0E0] text-center p-2">
              <a href="#new-release" className="inline-block px-2 text-dark uppercase">New Release</a>
            </div>
            <div className="border-e-2 border-[#E0E0E0] text-center p-2">
              <a href="#contact" className="inline-block px-2 text-dark uppercase">Contact Us</a>
            </div>
            <div className="text-center p-2">
              <a href="#blog" className="inline-block px-2 text-dark uppercase">Blog</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero */}
      <section className="min-h-128 home-hero-gradient text-green mb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center p-4">
            <div className="h-max">
              <h1 className="capitalize text-5xl mb-8">ipsum dolor si</h1>
              <p className="capitalize text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
              <button className="outline w-[187px] h-[51px] mt-8 rounded-md">Read More</button>
            </div>
          </div>
          <div className="flex justify-end">
            <img src="assets/images/home/home-hero-img.png" alt="books" />
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
            <p className="text-blue text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum..</p>
          </div>
        </div>
        

        <div className="grid grid-cols-3 gap-14 mt-10">
          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/higher-education-books.png" alt="higher education" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Higher Education</h2>
            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/management-books.png" alt="management" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Management Books</h2>
            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/engineering-books.png" alt="engineering" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-[24px] my-4">Engineering Books</h2>
            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <button className="outline w-[187px] h-[41px] mt-4 rounded-md flex justify-center items-center gap-2">View More <img src="assets/images/icons/btn-arrow.svg" alt="arrow" /></button>
          </div>
        </div>
      </section>

      {/* Ebook */}
      <section className="px-8 text-blue my-8 ebooks-gradient" id='ebooks'>
        <div className="grid grid-cols-12 gap-10">
          {/* Left */}
          <div className='col-span-5 flex flex-col justify-center'>
            <div className="flex items-center">
              <hr className="inline-block my-auto me-4 w-8 border-t-2 border-orange" /> 
              <h5 className='text-orange text-sm'>ebook</h5>
            </div>
            <h3 className="text-blue font-bold text-2xl mb-4">Access, Read, Practice & Engage with Digital Content (eBook) </h3>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-4">
              <div className="relative">
                <input type="text" className="w-full h-[50px] z-2 bg-white py-4 px-2 pe-[155px] rounded-[10px]" placeholder="Enter Your Email Address" />
                <button className="absolute w-[153px] h-[50px] z-3 bottom-0 right-0 bg-orange text-white rounded-r-[10px]">Login</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-7 flex justify-end">
            <img src="assets/images/home/home-ebooks.png" alt="ebooks" className="" />
          </div>
        </div>
      </section>

      {/* Book Releases */}
      <section className="min-h-128 py-20 px-8 text-blue my-8" id='new-release'>
        <h5 className="text-[13px] mb-4 text-center text-[#7A7A7A]">Some quality items</h5>
        <div className="flex justify-center items-center">
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
          <h3 className="text-4xl text-center px-4">New Release Books</h3>
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
        </div>
      
        <div className="grid grid-cols-4 gap-20 mt-12">
          {loadingBooks ? (
            <>
              {[1, 2, 3, 4].map((n) => (
                <BookSkeleton key={n} />
              ))}
            </>
          ) : (
            <>
              {newReleases.map((book, index) => (
                <div key={index}>
                  <div className="book-card-shadow p-10 mb-6 flex justify-center w-fit mx-auto">
                    <img src={book.image_url} alt="book cover" className=" w-60 h-96" />
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl capitalize">{book.book_name}</h3>
                    <h5 className="text-md text-gray capitalize">{book.author}</h5>
                    <h5 className="text-xl mt-2 text-orange">$ {book.price}</h5>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <hr className="border-[#E0E0E0] my-12" />

        <div className="flex justify-end">
          <Link to="/products" className="flex items-center gap-2 text-orange">View all products <img src="assets/images/icons/btn-arrow-orange.svg" alt="arrow icon" /></Link>
        </div>
      </section>

      {/* Featured Book */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 featured-book-gradient">
        <div className="grid grid-cols-2 gap-20 mt-12">
          <div className="p-12">
            <div className="flex justify-center relative">
              <img src="assets/images/home/featured-book.png" alt="" className="" />
              <img src="assets/images/home/featured-book-mask.png" className="absolute left-10 top-[40%]" alt="" />
            </div>
          </div>
          <div className="p-12 flex justify-center items-center">
            <div className="h-max">
              <h2 className="text-4xl mb-8">Featured Book</h2>
              <div className="mb-6">
                <hr className="w-24 border-t-2 mb-2 border-orange" />
                <h5 className="text-[13px] text-gray uppercase">By Timbur Hood</h5>
              </div>
              <h2 className="text-[28px] mb-6">Birds Gonna Be Happy</h2>
              <p className="text-[#7A7A7A] text-xl mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <h4 className="text-orange text-[23px]">$ 45.00</h4>

              <button className="mt-6 w-[188px] h-[51px] outline border border-[#393280] rounded-md">View More</button>
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
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
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
      <section className="p-40 text-blue my-8 bg-[#E0E0E0]">
        <div className="grid grid-cols-2 gap-2 my-auto">
          {/* Left */}
          <div className='flex flex-col justify-center'>
            <h3 className="text-black font-bold text-5xl mb-4">Subscribe to<br /> our newsletter</h3>
          </div>

          {/* Right */}
          <div className='flex flex-col justify-center'>
            <p className="text-[#7A7A7A] text-md mb-10">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
            <div className="relative">
              <input type="text" className="w-full p-3 pe-[95px] z-2 border-b border-[#6F6F6F] bg-transparent text-black" />
              <button className="absolute inset-y-0 right-0 z-3 w-[90px] text-orange border-0 rounded-none flex text-xl items-center gap-2">Send <img src="assets/images/icons/send.svg" alt="send icon" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-8 text-blue my-8" id='blog'>
        <h2 className="text-[32px] text-center text-black sentence">Read our many blogs</h2>
        <div className="grid grid-cols-2 gap-20 my-10">
          {blogs.map((blog, index) => (
            <div className="relative group hover:cursor-pointer" key={index}>
              <div className="w-full z-2">
                <img src={blog.image} alt="blog image" className="w-full" />
                <div className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full">
                  <h3 className="text-white text-3xl">{blog.title}</h3>
                  <p className="text-white text-xl">{blog.desc}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-3 bg-[#090606BF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full h-full flex justify-center items-center bg-[#090606BF]">
                <button className="my-6 w-[146px] h-[48px] outline border border-white text-white flex justify-center items-center gap-2 text-xl font-normal">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}