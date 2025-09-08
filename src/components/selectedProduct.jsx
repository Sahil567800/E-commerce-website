import { FaStar } from 'react-icons/fa6'
// import productImg from '../assets/img/clothes/imgcard2.jpeg'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productContext from './context'
export const SelectedProduct = () => {
    const {productId} = useParams()
    const {products} = useContext(productContext) 
    const [productData,setProductData] = useState('')

    const FetchProductData = () =>{
       const matchProduct = products.find(item=>item.id===productId)
        setProductData(matchProduct)
    }
    useEffect(()=>{
        FetchProductData()
    },[productId,products])
   
    return(
        <>
        <section id="selected-product" className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="sp-img">
                            <img src={productData.img} alt="" width={'100%'}/>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <h4>{productData.title}</h4>
                        <div className="my-2">
                            <FaStar className='text-gold'/>
                            <FaStar className='text-gold'/>
                            <FaStar className='text-gold'/>
                            <FaStar className='text-gold'/>
                            <FaStar className='text-gold'/>
                        </div>
                        <h4>${productData.price}</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quidem, odit rem omnis amet vero quisquam! Eos suscipit totam quibusdam veritatis, deleniti maiores repellendus cum nam quis earum natus animi labore fuga. Iste?</p>
                        <h5>Selct Size</h5>
                        <div className="my-3">
                            <button className='btn bg-gray text-black mx-1 px-3'>S</button>
                            <button className='btn bg-gray text-black mx-1 px-3'>L</button>
                            <button className='btn bg-gray text-black mx-1 px-3'>M</button>
                            <button className='btn bg-gray text-black mx-1 px-3'>XL</button>
                            <button className='btn bg-gray text-black mx-1 px-3'>XXL</button>
                        </div>
                        <button className='btn bg-black text-white'>ADD TO CART</button>
                        <hr />
                        <h6>100% Original Product</h6>
                        <h6 className=''>Cash on Delivery is available on this Product</h6>
                        <h6 className=''>Easy return and Exchange policy within 7 days</h6>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}