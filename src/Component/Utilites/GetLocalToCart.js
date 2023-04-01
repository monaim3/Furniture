import { getStoredCart } from "../FakeDb/FakeDb"

 export const getLocalToCart=async()=>{
         const products=await fetch('fakeDb.json')
         const product=await products.json()
         const saveCart=getStoredCart()
         let initalCart=[]
      
         for(const id in saveCart){
            const foundProduct=product.find(product=>product.id===id)
            if(foundProduct){
                const quantity=saveCart[id]
                foundProduct[id]=quantity
                initalCart.push(foundProduct)
            }
         }
         return {product,initalCart}
}