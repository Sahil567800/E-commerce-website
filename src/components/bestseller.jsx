import { useState,useEffect,useContext } from "react"
import Product from "./product"
import productContext from "./context"
export const BestSeller = () => {
    const {products,addToCart} = useContext(productContext)
    const [bestSeller,setBestSeller] = useState(products)
    useEffect(()=>{
        setBestSeller(products.filter((item)=>item.bestSeller))
    },[])
    return (
        <>
            <section id="best-seller" className="py-3">
                <div className="container">
                    <div className="row"> <h1 className="my-3">Best Sellers</h1></div>
                    <div className="row">
                    {bestSeller.map((item)=>{
                        return <Product title={item.title} id={item.id} add={()=>addToCart(item)} img={item.img} price={item.price}/>
                    })}
                    </div>
                </div>
            </section>
        </>
    )
}