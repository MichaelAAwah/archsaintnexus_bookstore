import Navbar from "@/components/Navbar";

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
  return (
    <div>
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-128 gradient-1 text-green mb-8">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex justify-center items-center p-4">
            <div className="h-max">
              <h1 className="capitalize text-6xl mb-4">ipsum dolor si</h1>
              <p className="capitalize text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</p>
              <button className="outline w-40 py-3 px-4 mt-4 rounded-md">Read More</button>
            </div>
          </div>
          <div>
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
            <h3 className="text-blue font-bold text-3xl">Expore Our Top Categories</h3>
          </div>

          {/* Right */}
          <div>
            <p className="text-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum..</p>
          </div>
        </div>
        

        <div className="grid grid-cols-3 gap-14 mt-10">
          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/higher-education-books.png" alt="higher education" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Higher Education</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/management-books.png" alt="management" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Management Books</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="assets/images/home/engineering-books.png" alt="engineering" className="w-full h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Engineering Books</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <button className="outline w-40 py-3 px-4 mt-4 rounded-md">Read More</button>
          </div>
        </div>
      </section>

      {/* Ebook */}
      <section className="px-8 text-blue my-8 gradient-1">
        <div className="grid grid-cols-2 gap-2">
          {/* Left */}
          <div className='flex flex-col justify-center'>
            <div className="flex items-center">
              <hr className="inline-block my-auto me-4 w-8 border-t-2 border-orange" /> 
              <h5 className='text-orange'>ebook</h5>
            </div>
            <h3 className="text-blue font-bold text-3xl mb-4">Access, Read, Practice & Engage with Digital Content (eBook) </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="mt-4">
              <input type="text" className="w-full bg-white py-4 px-2 rounded-sm" placeholder="Enter Your Email Address" />
            </div>
          </div>

          {/* Right */}
          <div>
            <img src="assets/images/home/home-ebooks.png" alt="ebooks" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Book Releases */}
      <section className="min-h-128 py-20 px-8 text-blue my-8">
        <h5 className="text-sm mb-4 text-center text-gray">Some quality items</h5>
        <div className="flex justify-center items-center">
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
          <h3 className="text-3xl text-center px-4">Some quality items</h3>
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
        </div>
      
        <div className="grid grid-cols-4 gap-20 mt-12">
          {newReleases.map((book, index) => (
            <div key={index}>
              <div className="book-card-shadow p-4 mb-6 flex justify-center">
                <img src={book.image} alt="book cover" className="" />
              </div>

              <div className="text-center">
                <h3 className="text-2xl">{book.name}</h3>
                <h5 className="text-sm text-gray">{book.author}</h5>
                <h5 className="text-md mt-2 text-orange">$ {book.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Featured Book */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 gradient-1">
        <div className="grid grid-cols-2 gap-20 mt-12">
          <div className="p-12">
            <div className="flex justify-center">
              <img src="assets/images/home/featured-book.png" alt="" className="" />
            </div>
          </div>
          <div className="p-12 flex justify-center items-center">
            <div className="h-max">
              <h2 className="text-3xl mb-8">Featured Book</h2>
              <div className="mb-6">
                <hr className="w-24 border-t-2 mb-4 border-orange" />
                <h5 className="text-sm text-gray uppercase">By Timbur Hood</h5>
              </div>
              <h2 className="text-2xl mb-6">Birds Gonna Be Happy</h2>
              <p className="text-gray mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <h4 className="text-orange text-md">$ 45.00</h4>

              <button className="mt-16 w-40 py-4 px-6 outline border-blue rounded-md">View More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Discount */}
      <section className="px-8 text-blue bg-[#FCEBEA] m-16 rounded-[20px]">
        <div className="grid grid-cols-2 gap-2">
          {/* Left */}
          <div className='flex flex-col justify-center'>
            <h3 className="text-blue font-bold text-4xl mb-4">All books are 50% off now! Don't miss such a deal!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
            <div className="mt-4 flex gap-4">
              <div className="text-center">
                <span className="block text-orange font-bold text-3xl">768</span>
                <span className="block uppercase text-xl">Days</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-3xl">01</span>
                <span className="block uppercase text-xl">hours</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-3xl">27</span>
                <span className="block uppercase text-xl">min</span>
              </div>
              <div className="text-center">
                <span className="block text-orange font-bold text-3xl">55</span>
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
            <h3 className="text-black font-bold text-4xl mb-4">Subscribe to our newsletter</h3>
          </div>

          {/* Right */}
          <div className='flex flex-col justify-center'>
            <p className="text-[#7A7A7A] mb-10">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
            <input type="text" className="w-full border-b border-black bg-transparent text-black" />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="px-8 text-blue my-8">
        <h2 className="text-center text-black sentence">Read our many blogs</h2>
        <div className="grid grid-cols-2 gap-10 my-10">
          {blogs.map((blog, index) => (
            <div className="relative hover:cursor-pointer" key={index}>
              <img src={blog.image} alt="blog image" />
              <caption className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full">
                <h3 className="text-white">{blog.title}</h3>
                <p className="text-white">{blog.desc}</p>
              </caption>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}