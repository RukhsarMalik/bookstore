export interface Book {
  id: number;  // Ensure id is a number
  title: string;
  author: string;
  price: string;  // Or number if it's stored as a number
  quantity: number;  // Make sure quantity is a number
  image: string;
  description: string;
  category: string;
  categoryId: number;
}
