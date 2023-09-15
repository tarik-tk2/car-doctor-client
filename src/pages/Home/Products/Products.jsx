import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const handleLoadMore = () => { 
        setPage(page + 1);
    }
    useEffect(() => {
        setLoading(true)
        setTimeout(() => { 
            fetch(`http://localhost:4000/products?page=${page}&limit=6`)
              .then((response) => response.json())
                .then((result) => setProducts([...products, ...result]));
            setLoading(false)
        },2000)
    },[page])
    return (
      <div>
        <div>
          <div className="space-y-12 mb-16">
            <p className="text-center text-[#FF3811] font-bold text-xl tracking-wider h-6 p-0">
              Popular Products
            </p>
            <p className=" text-center text-5xl  font-bold w-full ">
              Browse Our Products
            </p>
            <p className="tracking-wider	lg:w-2/3 m-auto">
              the majority have suffered alteration in some form, by injected
              humour, or randomized words which do not look even slightly
              believable.
            </p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <button
            className="btn border-[#FF3811] bg-white text-[#FF3811] mt-10"
            onClick={handleLoadMore}
          >
            {loading && (
              <span className="loading loading-dots loading-sm"></span>
            )}
            More Products
          </button>
        </div>
      </div>
    );
};

export default Products;