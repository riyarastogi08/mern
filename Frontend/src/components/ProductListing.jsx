import React, {useState, useEffect} from 'react'

const ProductListing = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const res = await fetch('http://localhost:3000/product/getall')
        console.log(res.status)
        if (res.status === 500){
        const data = await res.json();
        console.log(data)
        setProducts(data)
    }
}
useEffect (() => {
    fetchProducts()
}, []);

const displayProducts = () =>{
    return products.map((item) => (
        <div className="container">
            <div className='com-md-4'>
                <div className='card p-3 mb-5 bg-dark'>
                    <h3 className='mt-3 text-light'>{item.name}</h3>
                    <h5 className='mt-3 text-light'>{item.price}</h5>
                    <p className='mt-3 text-light'>{item.description}</p>
                    <h3 className='mt-3 text-light'>{item.category}</h3>
                </div>

            </div>
        </div>
    ))
}
  return (
    <div>
        <header className='bg-body-tertiary'>
            <div className='container py-5'>
                <p className='text-centre fw-bold'>All Products</p>
                <input type='text' placeholder='Search Products' className='form-control w-75 m-auto'/>
            </div>
        </header>

        <div className='container mt-5'>
            <div className='row mt-5 p-5'>
                {displayProducts()}
            </div>
        </div>
    </div>
  )
}

export default ProductListing