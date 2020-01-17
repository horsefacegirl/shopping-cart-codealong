import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: 'S' },
  { id: 2, title: 'T-shirt', price: 200, emoji: 'T' },
  { id: 3, title: 'Pants', price: 350, emoji: 'P' },
  { id: 4, title: 'Dress', price: 550, emoji: 'D' }
];

export const products = createSlice({
  name: 'products',
  initialState: productData
});