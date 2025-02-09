import { z } from 'zod';
import { getToken } from './utils';

// Types
export const UserSchema = z.object({
  id: z.number(),
  nameOfRestaurant: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  locationRegion: z.string(),
  locationArea: z.string(),
  tillNumber: z.string(),
  resetToken: z.string(),
  resetTokenExpiry: z.string().datetime()
});

export const BookSchema = z.object({
  id: z.number(),
  book_name: z.string(),
  author: z.string(),
  price: z.string(),
  image_url: z.string(),
  release_date: z.string(),
  pub_date: z.string(),
});

export const OrderSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
  status: z.enum(['pending', 'processing', 'shipped', 'delivered', 'cancelled']),
  totalAmount: z.number(),
  customerName: z.string(),
  customerEmail: z.string(),
  shippingAddress: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const NotificationSchema = z.object({
  id: z.string(),
  type: z.enum(['low_stock', 'new_order', 'order_status', 'payout']),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;
export type Book = z.infer<typeof BookSchema>;
export type Order = z.infer<typeof OrderSchema>;
export type Notification = z.infer<typeof NotificationSchema>;

// Mock data
const mockUser: User = {
  id: 2,
  nameOfRestaurant: 'Restaurant1',
  email: 'mail1@mail.com',
  phoneNumber: '0249495956',
  locationRegion: 'Greater Accra',
  locationArea: 'Madina',
  tillNumber: '',
  resetToken: '$2b$10$u1bc2x6P1L9mWTW9MF9Tku1zAQrrcUycVsaroh/SAYZQAkLhVXYLC',
  resetTokenExpiry: '2025-01-06T10:01:31.342Z'
};

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

const mockOrders: Order[] = [
  {
    id: '1',
    productId: '1',
    quantity: 2,
    status: 'pending',
    totalAmount: 59.98,
    customerName: 'Alice Smith',
    customerEmail: 'alice@example.com',
    shippingAddress: '123 Main St, City, Country',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  // Add more mock orders...
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'low_stock',
    message: 'Premium Widget is running low on stock (5 items remaining)',
    read: false,
    createdAt: new Date().toISOString(),
  },
  // Add more mock notifications...
];

// API functions
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function signup(data: {
  nameOfRestaurant: string,
  email: string,
  password: string,
  locationRegion: string,
  locationArea: string,
  phoneNumber: string,
  tillNumber: string,
}): Promise<User> {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const body = JSON.stringify(data)

  const responseData = await fetch('http://localhost:3001/auth/register', {
    method: 'POST',
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    throw new Error(response ? response.message : 'Failed to create account')
  }
  
  return response;
}

interface LoginResponse {
  user: User,
  accessToken: string
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  const body = JSON.stringify({
    email,
    password
  })

  const responseData = await fetch('http://localhost:3001/auth/login', {
    method: 'POST',
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    throw new Error(response ? response.message : 'Failed to login')
  }

  return { user: response, accessToken: response.accessToken };
}

export async function forgotPassword(email: string) {
  const body = JSON.stringify({
    email
  })

  const responseData = await fetch('http://localhost:3001/auth/request-reset', {
    method: 'POST',
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    throw new Error(response ? response.message : 'Request Failed')
  }
}

export async function resetPassword(password: string) {
  const body = JSON.stringify({
    password
  })

  const responseData = await fetch('http://localhost:3001/auth/reset-password', {
    method: 'POST',
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    throw new Error(response ? response.message : 'Failed to send reset instructions')
  }
}

export async function updateUser(data: {
  nameOfRestaurant?: string,
  email?: string,
  password?: string,
  locationRegion?: string,
  locationArea?: string,
  phoneNumber?: string,
  tillNumber?: string,
}): Promise<User> {
  const token = getToken()
  const body = JSON.stringify(data)

  const responseData = await fetch('http://localhost:3001/user', {
    method: 'PATCH',
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json", 
      "Authorization": `Bearer ${token}`
    }
  })
  const response = await responseData.json()

  if(!response || !responseData.ok) {
    if(responseData.status === 401) {
      throw new Error('Token Expired')
    }
    throw new Error(response ? response.message : 'Failed to update details')
  }
  
  return mockUser;
}

export async function getBooks(): Promise<Book[]> {
  const responseData = await fetch(`http://127.0.0.1:8000/api/books/`, {
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

export async function getOrders(): Promise<Order[]> {
  await delay(500);
  return mockOrders;
}

export async function getNotifications(): Promise<Notification[]> {
  await delay(500);
  return mockNotifications;
}

export async function getDashboardStats() {
  await delay(500);
  return {
    totalSales: 15789.45,
    totalOrders: 127,
    averageOrderValue: 124.32,
    pendingOrders: 12,
  };
}