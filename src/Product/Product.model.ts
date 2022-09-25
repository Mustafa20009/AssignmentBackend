import * as mongo from "mongoose"
export const ProductSchema=new mongo.Schema({
     name: {type:String,required:true},
     price: {type:Number,required:true},
     description: {type:String,required:true},
     inventDate: {type:String,required:true},

})

export interface Product {
     id: string,
     name: string,
     price: number,
     description: string,
     inventDate: string,}
