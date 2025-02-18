import { Skeleton } from './ui/skeleton'

export function HomeBlogSkeleton() {
  return (
    <div>
      <div className="relative group hover:cursor-pointer">
        <div className="w-full z-2">
          <Skeleton className="w-full opacity-[.1] h-[384px]">
          </Skeleton>
          <div className="absolute bottom-0 left-0 text-left p-4 blog-gradient bg-opacity-50 w-full">
            <Skeleton>
              {/* <h3 className="text-white text-xl md:text-3xl">some title</h3> */}
            </Skeleton>
            <Skeleton>
              {/* <p className="text-white text-md md:text-xl">lorem</p> */}
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
          <Skeleton className="w-full grow h-[352px]" />
        </div>

        <div className="">
          <Skeleton>
            <span className="block my-4 text-[#74642F] w-full p-4"></span>
          </Skeleton>
          <Skeleton>
            <h3 className="text-2xl text-[#173F5F] font-normal w-full p-4"></h3>
          </Skeleton>
          <hr className="border-[#C8C8C8] my-4" />
          <div className="flex justify-end items-center space-x-4 text-primary">
            <Skeleton>
              <a href="#" className='inline-block w-[13.6px] h-[13.6px]'></a>
            </Skeleton>
            <Skeleton>
              <a href="#" className='inline-block w-[13.6px] h-[13.6px]'></a>
            </Skeleton>
            <Skeleton>
              <a href="#" className='inline-block w-[13.6px] h-[13.6px]'></a>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  )
}
