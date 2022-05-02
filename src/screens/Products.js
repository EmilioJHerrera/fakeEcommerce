import React, {useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard';

const Products = () => {
  
  const [products, setProducts] = useState([]); //category, description, id, image, price, title, rating

  useEffect (()=>{

    const fecthProducts =async () =>{
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const resultado = await response.json();
            setProducts(resultado);
            
        } catch (error) {
            console.log('error fecthProducts:',error);
        }
    };
    fecthProducts();

  },[])

    return (
    <div className='background'>
        
        {products.length===0?
        <><h1>CARGANDO...</h1></>:
        <>
        {products.map((item,index)=>{

            const {category, description, id, image, price, title, rating} = item;
            return(
                <ProductCard 
                category={category} 
                description={description} 
                id={id} 
                image={image} 
                price={price} 
                title={title} 
                rating={rating}
                />
            )
        })}
</>}
    </div>
  )
}

export default Products