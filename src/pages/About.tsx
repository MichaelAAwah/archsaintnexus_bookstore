import { Link } from "react-router-dom";

import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import usePageTitle from "@/hooks/usePageTitle";

const newReleases = [
  {
    name: 'The Mind Connection',
    author: 'Joyce Meyer',
    image: 'assets/images/about/about-release-book-1.png'
  },
  {
    name: 'The Road to Recognition',
    author: 'Seth Price/ Barry Feldman',
    image: 'assets/images/about/about-release-book-2.png'
  },
  {
    name: 'Battlefield of the mind',
    author: 'Joyce Meyer',
    image: 'assets/images/about/about-release-book-3.png'
  },
  {
    name: 'The Road to Recognition',
    author: 'Seth Price/ Barry Feldman',
    image: 'assets/images/about/about-release-book-2.png'
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

export default function About() {
  usePageTitle('About Us')
  return (
    <div>
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-128 about-hero-gradient text-green mb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center p-4">
            <div className="h-max">
              <h1 className="capitalize text-5xl mb-8">ipsum dolor si</h1>
              <p className="capitalize text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
              <button className="outline w-[197px] h-[61px] mt-8 rounded-md">Read More</button>
            </div>
          </div>
          <div className="flex justify-end">
            <img src="assets/images/home/home-hero-img.png" alt="books" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-8 text-blue my-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-3">
            <div className="relative hover:cursor-pointer rounded-[11px]">
              <img src="assets/images/about/higher-education.png" alt="category image" className="w-full rounded-[11px] h-[394px]" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full rounded-[11px]">
                <h3 className="text-white text-[22px] font-bold text-center">Higher Education</h3>
              </caption>
            </div>
          </div>
          <div className="col-span-6">
            <div className="rounded-[11px] border-2 border-[#CACACA] flex justify-center items-center gap-10 h-[394px]">
              <div>
                <h3 className="font-bold text-blue uppercase mb-20 text-4xl text-center">Explore our top<br /> categories</h3>
                <div className="flex justify-center">
                  <button className="bg-orange w-[200px] rounded-[11px] h-[55px] text-white capitalize text-xl">View all</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative hover:cursor-pointer rounded-[11px]">
              <img src="assets/images/about/management.png" alt="category image" className="w-full rounded-[11px] h-[394px]" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full rounded-[11px]">
                <h3 className="text-white text-[22px] font-bold text-center">Management Books</h3>
              </caption>
            </div>
          </div>

          <div className="col-span-3">
            <div className="relative hover:cursor-pointer rounded-[11px]">
              <img src="assets/images/about/finance.png" alt="category image" className="w-full rounded-[11px] h-[394px]" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full rounded-[11px]">
                <h3 className="text-white text-[22px] font-bold text-center">Finance Books</h3>
              </caption>
            </div>
          </div>
          <div className="col-span-6">
            <div className="relative hover:cursor-pointer rounded-[11px]">
              <img src="assets/images/about/engineering.png" alt="category image" className="w-full rounded-[11px] h-[394px]" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full rounded-[11px]">
                <h3 className="text-white text-[22px] font-bold text-center">Engineering Books</h3>
              </caption>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative hover:cursor-pointer rounded-[11px]">
              <img src="assets/images/about/commerce.png" alt="category image" className="w-full rounded-[11px] h-[394px]" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full rounded-[11px]">
                <h3 className="text-white text-[22px] font-bold text-center">Commerce Books</h3>
              </caption>
            </div>
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
                <input type="text" className="w-full h-[60px] z-2 bg-white py-4 px-2 pe-[155px] rounded-[10px]" placeholder="Enter Your Email Address" />
                <button className="absolute w-[153px] h-[60px] z-3 bottom-0 right-0 bg-orange text-white rounded-r-[10px]">Login</button>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="col-span-7 flex justify-end">
            <img src="assets/images/about/ebooks.png" alt="ebooks" className="" />
          </div>
        </div>
      </section>

      {/* Book Releases */}
      <section className="min-h-128 py-20 px-10 text-blue my-8" id='new-release'>
        <h3 className="text-[48px] text-center px-4 text-[#173F5F]">New Release Books</h3>
        <h5 className="text-[18px] mb-4 text-center text-[#767070]">1000+ books are published by different authors everyday. </h5>
        <Link to='/books' className="flex justify-center gap-2 items-center text-orange text-xl mt-6 text-center">View all products <img src="assets/images/about/arrow.svg" alt="arrow" /></Link>
      
        <div className="grid grid-cols-4 gap-20 mt-12">
          {newReleases.map((book, index) => (
            <div key={index} className="about-book-release-card p-6">
              <div className="mb-6 flex justify-center">
                <img src={book.image} alt="book cover" className="" />
              </div>

              <div className="text-center">
                <h3 className="text-[22px] text-[#173F5F] capitalize">{book.name}</h3>
                <h5 className="text-[14px] text-gray capitalize">{book.author}</h5>
                <div className="flex justify-center gap-2 mt-4">
                  <img src="assets/images/about/rating.svg" alt="rating" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Book */}
      <section className="min-h-128 py-20 px-8 text-[#173F5F] my-8">
        <div className="grid grid-cols-2 gap-6 place-content-center mt-12">
          <div className="">
            <div className="flex justify-center">
              <img src="assets/images/home/featured-book.png" alt="" className="" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-max">
              <h5 className="text-md text-[#969595] my-6">Featured Book of the week</h5>
              <h2 className="text-[48px] my-6">Birds gonna be happy</h2>
              <div className="flex justify-start gap-2 my-6">
                <img src="assets/images/about/rating.svg" alt="rating" />
              </div>
              <p className="text-[#7A7A7A] text-xl my-6">Jump start your book reading by quickly check through the popular book categories. 1000+ books are published by different authors everyday. Buy your favourite books on TreeBooks Today.</p>

              <button className="my-6 w-[198px] h-[61px] outline border border-[#173F5F] text-[#173F5F] rounded-md flex justify-center items-center gap-2 text-xl font-normal">View More <img src="assets/images/about/btn-arrow.svg" alt="arrow" className="text-[#173F5F]" /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Discount */}
      <section className="text-blue bg-[#CACECF] m-16">
        <div className="grid grid-cols-12 bg-clip-border bg-left-bottom bg-no-repeat bg-cover">
          {/* Left */}
          <div className='col-span-4 xl:col-span-3 flex justify-start overflow-hidden'>
            <img src="assets/images/about/coming-soon-bg.png" alt="ebooks" className="max-w-none" />
          </div>

          {/* Middle */}
          <div className="col-span-4 xl:col-span-5 p-6 bg-[#CACECF] text-[#173F5F] text-center">
            <h2 className="font-bold text-3xl mb-4">Coming Soon</h2>
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
            <div className="flex justify-center">
              <button className="my-6 w-[198px] h-[61px] outline border border-[#173F5F] text-[#173F5F] rounded-md flex justify-center items-center gap-2 text-xl font-normal">View More <img src="assets/images/about/btn-arrow.svg" alt="arrow" className="text-[#173F5F]" /></button>
            </div>
          </div>

          {/* Right */}
          <div className='col-span-4 p-6 pe-0 flex justify-end bg-[#CACECF]'>
            <img src="assets/images/about/coming-soon-right.png" alt="ebooks" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="text-blue my-8 bg-[#FAEFEF]" id='subscribe'>
        <div className="grid grid-cols-12 gap-10">

          {/* Left */}
          <div className="col-span-6 flex justify-start">
            <img src="assets/images/about/subscribe.png" alt="ebooks" className="" />
          </div>

          {/* Right */}
          <div className='col-span-6 flex text-black flex-col justify-center pe-8'>
            <h3 className="font-bold text-2xl mb-4">Get over a 100 free books</h3>
            <p className="text-xl">Get access by subcribing to our newsletter. Jump start your book reading by quickly check through the popular book categories...</p>
            <div className="mt-8">
              <div className="relative">
                <input type="text" className="w-full h-[60px] z-2 bg-white py-4 px-2 pe-[155px] rounded-[10px]" placeholder="Enter Email Address" />
                <button className="absolute w-[153px] h-[60px] z-3 bottom-0 right-0 bg-orange text-white rounded-r-[10px]">Get Free Books</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access FAQ */}
      <section className="py-20 px-16 text-[#173F5F] my-8 flex flex-col justify-between items-center text-center gap-10">
        <h2 className="text-3xl">Still not sure?</h2>
        <p>Jump start your book reading by quickly check through the popular book <br /> categories. 1000+ books are published by different authors everyday. Buy your <br /> favourite books on TreeBooks Today.</p>
        <button className="my-6 w-[188px] h-[51px] outline border border-[#173F5F] text-[#173F5F] rounded-md flex justify-center items-center gap-2 text-xl font-normal">Read FAQ</button>
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

      <Footer />
    </div>
  )
}
