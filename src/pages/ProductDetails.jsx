import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdStarRate } from "react-icons/md";
import { MdOutlineBorderColor } from "react-icons/md";


const ProductDetails = () => {
    const ProductData = useContext(ProductDataContext)
    const {productid}= useParams()
    const selectedProduct = ProductData.find((elem)=>productid==elem.id)
    console.log(selectedProduct);
        
    
  return (
    <div className='flex  max-w-full items-center justify-center  bg-gray-900 p-20 '>
       <div className='flex flex-col  w-[500px] bg-zinc-200 p-5 rounded-2xl  '>
       <div className='flex flex-col items-center justify-center'>
         <h1 className='text-5xl capitalize  w-full text-zinc-950 text-center'>{selectedProduct?.category}</h1>
             <div className='w-64 pt-5    flex items-center justify-center '>
                 <img className='w-full p-5 object-cover object-top' src={selectedProduct?.image} alt="" />
             </div>
       </div>
              <h2 className='mt-2 text-2xl text-zinc-900 mb-3'>{selectedProduct?.title}</h2>
              <h5 className='text-xs text-zinc-500'>{selectedProduct?.description}</h5>
              <div className='flex justify-between pt-10 '>
                     <h4 className='flex items-center text-gray-900'><LiaRupeeSignSolid />{selectedProduct?.price}</h4>
                <div className='flex gap-5'>
                    <span className='flex items-center gap-1 text-gray-900'><MdOutlineBorderColor />{selectedProduct?.rating.count}</span>
                    <span className='flex items-center gap-1 text-gray-900'><MdStarRate />{selectedProduct?.rating.rate}</span>
                </div>
              </div>
            </div>
      
    </div>
  )
}

export default ProductDetails
