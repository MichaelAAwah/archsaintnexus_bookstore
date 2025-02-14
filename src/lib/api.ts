import { z } from 'zod';

// Types
export const BookSchema = z.object({
  id: z.number(),
  book_name: z.string(),
  author: z.string(),
  price: z.string(),
  image_url: z.string(),
  release_date: z.string(),
  pub_date: z.string(),
});

export const BlogSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  content: z.string(),
  image_url: z.string(),
  pub_date: z.string(),
  updated_at: z.string(),
});

export type Book = z.infer<typeof BookSchema>;
export type Blog = z.infer<typeof BlogSchema>;

// Mock data
const mockBooks: Book[] = [
  {
    id: 1,
    book_name: 'Simple way of piece life',
    price: '40.00',
    author: 'Armor Ramsey',
    image_url: 'assets/images/home/home-release-book-1.png',
    release_date: new Date().toLocaleDateString('en-CA'),
    pub_date: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    book_name: 'Great travel at desert',
    price: '38.00',
    author: 'Sanchit Howdy',
    image_url: 'assets/images/home/home-release-book-2.png',
    release_date: new Date().toLocaleDateString('en-CA'),
    pub_date: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    book_name: 'The lady beauty Scarlett',
    price: '45.00',
    author: 'Arthur Doyle',
    image_url: 'assets/images/home/home-release-book-3.png',
    release_date: new Date().toLocaleDateString('en-CA'),
    pub_date: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    book_name: 'Once upon a time',
    price: '35.00',
    author: 'Klien Marry',
    image_url: 'assets/images/home/home-release-book-4.png',
    release_date: new Date().toLocaleDateString('en-CA'),
    pub_date: new Date().toLocaleDateString('en-CA'),
  },
]

const mockBlogs: Blog[] = [
  {
    id: 1,
    title: 'Learn about this week\'s top author',
    author: 'John Doe',
    content: 'Jump start your book reading by quickly check through the popular book categories...',
    image_url: 'assets/images/home/blog-1.png',
    pub_date: new Date().toLocaleDateString('en-CA'),
    updated_at: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    title: 'Why we celebrate readers',
    author: 'John Doe',
    content: 'Jump start your book reading by quickly check through the popular book categories...',
    image_url: 'assets/images/home/blog-2.png',
    pub_date: new Date().toLocaleDateString('en-CA'),
    updated_at: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    title: 'Toddlers can also read',
    author: 'John Doe',
    content: 'Jump start your book reading by quickly check through the popular book categories...',
    image_url: 'assets/images/home/blog-3.png',
    pub_date: new Date().toLocaleDateString('en-CA'),
    updated_at: new Date().toLocaleDateString('en-CA'),
  },
  {
    id: 1,
    title: 'Get started on your game',
    author: 'John Doe',
    content: 'Jump start your book reading by quickly check through the popular book categories...',
    image_url: 'assets/images/home/blog-4.png',
    pub_date: new Date().toLocaleDateString('en-CA'),
    updated_at: new Date().toLocaleDateString('en-CA'),
  },
]

// API functions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getBooks(): Promise<Book[]> {
  const responseData = await fetch(`https://archsaintnexus-bookstore-backend.onrender.com/api/books/`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    if(responseData.status === 401) {
      throw new Error('Token Expired')
    }
    throw new Error(response ? response.message : 'Failed to fetch books')
  }
  
  return response;
  await delay(500);
  return mockBooks;
}

export async function getBlogs(): Promise<Blog[]> {
  const responseData = await fetch(`https://archsaintnexus-bookstore-backend.onrender.com/api/blogs/`, {
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    if(responseData.status === 401) {
      throw new Error('Token Expired')
    }
    throw new Error(response ? response.message : 'Failed to fetch blogs')
  }
  
  return response;
  await delay(500);
  return mockBlogs;
}