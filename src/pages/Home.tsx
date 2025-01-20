import Navbar from "@/components/Navbar";

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
              <button className="outline w-max py-3 px-4 mt-4 rounded-md">Read More</button>
            </div>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="min-h-128 py-20 px-8 text-blue my-8">
        <div className="grid grid-cols-2 gap-2">
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
        

        <div className="grid grid-cols-3 gap-2 mt-6">
          {/* Col */}
          <div className="text-center">
            <img src="" alt="" className="w-32 h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Higher Education</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="" alt="" className="w-32 h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Management Books</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>

          {/* Col */}
          <div className="text-center">
            <img src="" alt="" className="w-32 h-38 shadow rounded-lg" />
            <h2 className="font-bold text-xl my-4">Engineering Books</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut mat,</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex justify-center">
            <button className="outline w-max py-3 px-4 mt-4 rounded-md">Read More</button>
          </div>
        </div>
      </section>

      {/* Ebook */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 gradient-1">
        <div className="grid grid-cols-2 gap-2">
          {/* Left */}
          <div>
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
            <img src="" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Ebook */}
      <section className="min-h-128 py-20 px-8 text-blue my-8">
        <h5 className="text-sm mb-4 text-center text-gray">Some quality items</h5>
        <div className="flex justify-center items-center">
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
          <h3 className="text-3xl text-center px-4">Some quality items</h3>
          <hr className="grow my-auto me-4 w-8 border-t-2 border-gray-100" /> 
        </div>
      
        <div className="grid grid-cols-4 gap-20 mt-12">
          <div>
            <div className="book-card-shadow p-4 mb-6 flex justify-center">
              <img src="" alt="" className="book book-drop-shadow" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl">Simple Way of Piece Life</h3>
              <h5 className="text-sm text-gray">Armor Ramsey</h5>
              <h5 className="text-md mt-2 text-orange">$ 40.00</h5>
            </div>
          </div>

          <div>
            <div className="book-card-shadow p-4 mb-6 flex justify-center">
              <img src="" alt="" className="book book-drop-shadow" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl">Simple Way of Piece Life</h3>
              <h5 className="text-sm text-gray">Armor Ramsey</h5>
              <h5 className="text-md mt-2 text-orange">$ 40.00</h5>
            </div>
          </div>

          <div>
            <div className="book-card-shadow p-4 mb-6 flex justify-center">
              <img src="" alt="" className="book book-drop-shadow" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl">Simple Way of Piece Life</h3>
              <h5 className="text-sm text-gray">Armor Ramsey</h5>
              <h5 className="text-md mt-2 text-orange">$ 40.00</h5>
            </div>
          </div>

          <div>
            <div className="book-card-shadow p-4 mb-6 flex justify-center">
              <img src="" alt="" className="book book-drop-shadow" />
            </div>

            <div className="text-center">
              <h3 className="text-2xl">Simple Way of Piece Life</h3>
              <h5 className="text-sm text-gray">Armor Ramsey</h5>
              <h5 className="text-md mt-2 text-orange">$ 40.00</h5>
            </div>
          </div>
        </div>
      </section>


      {/* Ebook */}
      <section className="min-h-128 py-20 px-8 text-blue my-8 gradient-1">
        <div className="grid grid-cols-2 gap-20 mt-12">
          <div className="p-12">
            <div className="book-card-shadow p-4 mb-6 flex justify-center">
              <img src="" alt="" className="featured-book book-drop-shadow" />
            </div>
          </div>
          <div className="p-12 flex justify-center items-center">
            <div className="h-max">
              <h2 className="text-3xl mb-8">Featured Book</h2>
              <div className="mb-6">
                <hr className="w-24 border-orange" />
                <h5 className="text-sm text-gray uppercase">By Timbur Hood</h5>
              </div>
              <h2 className="text-2xl mb-6">Birds Gonna Be Happy</h2>
              <p className="text-gray mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.</p>
              <h4 className="text-orange text-md">$ 45.00</h4>

              <button className="mt-16 py-4 px-6 outline border-blue rounded-md">View More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}