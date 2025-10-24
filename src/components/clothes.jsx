import productContext from "./context"
import Product from "./product"
import { useContext, useEffect, useState } from "react"
const Clothes = () =>{
    const {products,addToCart} = useContext(productContext)
    const [clothes,setClothes] = useState([products])
    
    useEffect(()=>{
        setClothes(products.filter((item)=>item.thread))
    },[])
    return(
        <>
        <section id="clothes-sec" className="py-5">
        <div className="container">
            <div className="row">
                <h1 className="my-3">Threads Collection</h1>
                </div>
            <div className="row">
                {clothes.map((item,index)=>{
                    return <Product key={item.id || index} id={item.id} add={()=>addToCart(item)} title={item.title} price={item.price} img={item.img}/>
                })}
            </div>
        </div>
        </section>
        </>
    )
}
export default Clothes;