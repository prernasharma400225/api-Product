import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center justify-center pt-50 font-semibold'>
            <h1 className='text-8xl mb-20'>Order you Products</h1>
            <button className='bg-emerald-600 cursor-pointer text-white p-3 rounded text-sm' onClick={() => {
                navigate('/products')
            }}>Explore all Products</button>
        </div>
    )
}

export default Home
