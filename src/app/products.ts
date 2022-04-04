export interface Product {
  id: number;
  name: string;
  category: string;
  quantity: number;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Pen',
    category: 'Stationery',
    quantity: 100,
    price: 10,
    description: 'Bic pens'
  },
  {
    id: 2,
    name: 'Books',
    category: 'Stationery',
    quantity: 75,
    price: 50,
    description: 'A4 size exercise books'
  },
  {
    id: 3,
    name: 'Hoodies',
    category: 'Clothing',
    quantity: 69,
    price: 500,
    description: 'Branded hoodies, available in all sizes'
  },
  {
    id: 4,
    name: 'T-shirts',
    category: 'Clothing',
    quantity: 200,
    price: 200,
    description: 'Branded t-shirts available in all sizes'
  },
];


