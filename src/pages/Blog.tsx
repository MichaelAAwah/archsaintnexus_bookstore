import BookSkeleton from '@/components/book-skeleton';
import FooterOrange from '@/components/footerorange'
import usePageTitle from '@/hooks/usePageTitle';
import { getBooks } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom'

// const books = [
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
//     image: 'assets/images/products/book-5.png'
//   },
//   {
//     name: 'The lady beauty Scarlett',
//     price: '45.00',
//     author: 'Arthur Doyle',
//     image: 'assets/images/products/book-6.png'
//   },
//   {
//     name: 'Great travel at desert',
//     price: '38.00',
//     author: 'Sanchit Howdy',
//     image: 'assets/images/products/book-5.png'
//   },
//   {
//     name: 'The lady beauty Scarlett',
//     price: '45.00',
//     author: 'Arthur Doyle',
//     image: 'assets/images/products/book-7.png'
//   },
//   {
//     name: 'The lady beauty Scarlett',
//     price: '45.00',
//     author: 'Arthur Doyle',
//     image: 'assets/images/home/home-release-book-3.png'
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

export default function Blog() {
  usePageTitle('Blog')
  // const { data: books, isLoading: loadingBooks } = useQuery({
  //   queryKey: ['books'],
  //   queryFn: getBooks,
  // });

  // const newReleases = Array.isArray(books) ? [...books] : []

  return (
    <div className='text-blue'>
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

          <div className="grid grid-cols-12 gap-4 items-end py-4 mx-8">
            <div className="col-span-2 flex items-center h-full">
              <div className="relative w-[55px] h-[55px] p-[.2px] rounded-[10px] border-2 border-orange">
                <img className='z-2 w-full' src="assets/images/icons/products-nav-1.png" alt="" />
                <img className='absolute inset-x-0 mx-auto top-3 z-3' src="assets/images/icons/products-nav-2.png" alt="" />
              </div>
            </div>
            <div className="col-span-8 flex justify-center items-center">
              <div className="rounded-full w-20 h-20 bg-[#C4C4C4]">

              </div>
            </div>
            <div className="col-span-2 flex justify-end items-center h-full">
              <div className="flex justify-end items-center">
                <div className="grid grid-cols-3 gap-2">
                  <div className="border-e-2 border-gray text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img className='w-50' src="assets/images/icons/nav-account.svg" alt="" /></Link>
                  </div>
                  <div className="border-e-2 border-gray text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img className='w-50' src="assets/images/icons/nav-cart.svg" alt="" /></Link>
                  </div>
                  <div className="text-center">
                    <Link to="/" className="inline-flex items-center gap-2 px-2 uppercase"><img className='w-50' src="assets/images/icons/nav-wishlist.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center products-nav-gradient p-10">
          <h3 className="text-center uppercase text-blue"><Link to="/">Home</Link> / Blog</h3>
        </div>
      </div>

      <div className='p-10'>
        <div className="grid grid-cols-12 gap-4">
          {/* Sidebar filters */}
          <div className="col-span-2 xl:col-span-3">
            <div className="flex flex-col items-stretch gap-4">
              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Price</span>
                <span className='block p-2 text-xl'>&minus;</span>
              </div>

              <div className="flex justify-between items-center gap-4">
                <div className='flex justify-start items-center gap-2'>$ <input type="text" className='w-full bg-white p-1 border border-gray-100' /></div>
                <span className="text-gray-100">to</span>
                <div className='flex justify-end items-center gap-2'>$ <input type="text" className='w-full bg-white p-1 border border-gray-100' /></div>
              </div>
              <div className="flex flex-col items-stretch">
                <button className='w-full p-2 bg-blue text-white'>Filter</button>
              </div>

              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Product type</span>
                <span className='block p-2 text-2xl'>+</span>
              </div>

              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Availability</span>
                <span className='block p-2 text-2xl'>+</span>
              </div>

              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Brand</span>
                <span className='block p-2 text-2xl'>+</span>
              </div>

              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Color</span>
                <span className='block p-2 text-2xl'>+</span>
              </div>

              <div className="flex justify-between border-b border-gray-100">
                <span className='block p-2 text-xl'>Material</span>
                <span className='block p-2 text-2xl'>+</span>
              </div>
            </div>
          </div>

          <div className="col-span-10 xl:col-span-9">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 flex items-center">
                <span className='flex items-center gap-2 p-2 text-md'>Sort by: Alphabetically, A-Z <img src="assets/images/icons/carat-down.svg" alt="down arrow" /></span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className='block p-2 text-md'>Showing 1 - 12 of 26 result</span>
              </div>
              <div className="col-span-2 flex items-center">
                <span className='flex items-center gap-2 p-2 text-md'>Show: 12 <img src="assets/images/icons/carat-down.svg" alt="down arrow" /></span>
              </div>
              <div className="col-span-2 flex gap-10 items-center">
                <button className="bg-transparent border-0 p-2 w-10">
                  <img src="assets/images/icons/btn-grid.svg" alt="" />
                </button>
                <button className="bg-transparent border-0 p-2 w-10">
                  <img src="assets/images/icons/btn-list.svg" alt="" />
                </button>
              </div>
            </div>

            <section className="px-8 text-blue my-8" id='blog'>
              <h2 className="text-[32px] text-center text-black sentence">Highlights</h2>
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

            {/* Articles */}
            <section className="min-h-128 py-20 px-8 text-blue my-8 bg-[#F7FCFC]" id='blog'>
              <div className="flex justify-center items-center">
                <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
                <h3 className="text-[38px] text-center px-4">Articles</h3>
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
            </section>

          </div>
        </div>
      </div>

      {/* footer */}
      <FooterOrange />
    </div>
  )
}
