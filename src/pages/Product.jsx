import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Product = () => {
    const productData = useContext(ProductDataContext)

    let renderData = 'Loading...'

    if (productData.length > 0) {
        renderData = productData.map(function (elem, idx) {
            return <Link className='block w-60 p-5 bg-zinc-900 rounded-2xl text-zinc-300 ' key={idx} to={`/products/${elem.id}`} href="">
                <div className=' flex flex-col h-64 '>
                    <img className='h-48 object-cover object-top' src={elem.image} alt="" />
                    <h2 className='mt-5 text-sm'>{elem.title}</h2>
                </div>
            </Link>
        })
    }

    return (

        <div className='flex items-center justify-center flex-wrap gap-3 bg-black p-11'>
            {renderData}
        </div>

    )
}

export default Product
