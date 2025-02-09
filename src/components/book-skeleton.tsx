import { Skeleton } from './ui/skeleton'

export default function BookSkeleton() {
  return (
    <div>
      <div className="book-card-shadow p-4 mb-6 flex justify-center">
        <Skeleton>
          <img src={'assets/images/home/home-release-book-1.png'} alt="book cover" className="opacity-[.1]" />
        </Skeleton>
      </div>

      <div className="text-center">
        <Skeleton>
          <h3 className="text-2xl text-primary/10 capitalize">BookName</h3>
        </Skeleton>
        <Skeleton>
          <h5 className="text-md text-primary/10 capitalize">Author</h5>
        </Skeleton>
        <Skeleton>
          <h5 className="text-xl mt-2 text-primary/10">$ 0.00</h5>
        </Skeleton>
      </div>
    </div>
  )
}
