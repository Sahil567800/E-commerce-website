import { useEffect,useState,useContext } from "react"
import Product from "./product"
import productContext from "./context"
export const Collection= ()=> {
    const products = useContext(productContext)
    const [collection,setCollection] = useState(products)
    useEffect(()=>{
        setCollection(products)
    },[])
    return(
        <>
        <section id='collection' className="py-5">
            <div className="container">
                <div className="row"> <h1 className="my-3">Collection</h1></div>
                <div className="row">
                    {collection.map((item,index)=>{
                        return <Product key={index} title ={item.title} img={item.img} price={item.price} />
                    })}
                </div>
            </div>
        </section>
        </>
    )
}