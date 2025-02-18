import { Skeleton } from './ui/skeleton'

export default function BookSkeleton() {
  return (
    <div>
      <div className='book-card-shadow p-10 mb-6 flex justify-center w-fit mx-auto'>
        <Skeleton className="opacity-[.1] w-60 h-96">
        </Skeleton>
      </div>

      <div className="text-center">
        <Skeleton className='mt-2 w-full p-4'>
        </Skeleton>
        <Skeleton className='mt-2 w-full p-4'>
        </Skeleton>
        <Skeleton className='mt-2 w-full p-2'>
        </Skeleton>
      </div>
    </div>
  )
}
