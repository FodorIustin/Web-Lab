import {defineStore} from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore("products",
  (
    state: ()=> {
      return{
        products: [],
      }
    }.
    actions:{
      addProduct(id, name, stars, reviwes, sales,price){
        const newProduct = {id, name, stars, reviwes, sales,price}
        this.products.push({newProduct})
      },
      deleteProduct(){
        const productIndex = this.products.findIndex(product => product.id === id)
        this.porducts.splice(productIndex, 1)
      }
    }
  )
)