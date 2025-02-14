import { Skeleton } from './ui/skeleton'

export function HomeBlogSkeleton() {
  return (
    <div>
      <div className="relative group hover:cursor-pointer">
        <div className="w-full z-2">
          <Skeleton>
            <img src='assets/images/home/blog-1.png' alt="blog image" className="w-full opacity-[.1] h-[384px]" />
          </Skeleton>
          <div className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full">
            <Skeleton>
              <h3 className="text-white text-xl md:text-3xl">some title</h3>
            </Skeleton>
            <Skeleton>
              <p className="text-white text-md md:text-xl">lorem</p>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}

export function BlogSkeleton() {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <img src='assets/images/about/blog-1.png' alt="article cover" className="w-full h-[352px]" />
        </div>

        <div className="">
          <Skeleton>
            <span className="block my-4 text-[#74642F]">2 Aug, 2021</span>
          </Skeleton>
          <Skeleton>
            <h3 className="text-2xl text-[#173F5F] font-normal">Title</h3>
          </Skeleton>
          <hr className="border-[#C8C8C8] my-4" />
          <div className="flex justify-end items-center space-x-4 text-primary">
            <Skeleton>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-fb-dark.svg" alt="facebook icon" /></a>
            </Skeleton>
            <Skeleton>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-tw-dark.svg" alt="twitter icon" /></a>
            </Skeleton>
            <Skeleton>
              <a href="#"><img className="w-[13.6px] h-[13.6px]" src="assets/images/icons/nav-insta-dark.svg" alt="instagram icon" /></a>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}
