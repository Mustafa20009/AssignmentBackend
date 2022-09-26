import * as mongo from 'mongoose';
export const ProductSchema = new mongo.Schema({
  name: {
    type: String,
    required: [true, 'Name is require'],
    minlength: [2, 'Enter minimum 2 character of name'],
  },
  price: {
    type: [Number,"Price should be a nummber"],
    required: [true, 'Price is Required'],
    min: [1, 'Price Must be at least 1'],    
  },
  description: {
    type: String,
    required: [true, 'Descriptioon is Required'],
    minlength: [10, 'Enter minimum 10 character of description'],
  },
  inventDate: { type: String, required: [true, 'Inventery Date is Required'] },
});

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  inventDate: string;
}
