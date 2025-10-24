import productContext from "./context"
import Product from "./product"
import { useState ,useContext,useEffect} from "react";
const Shoes = () => {
    const {products,addToCart} = useContext(productContext)
     const [shoes,setShoes] = useState([products])

     useEffect(()=>
        {
          setShoes(products.filter((item)=>!item.thread))  
        },[])

    return (
        <>
            <section id="shoeSec" className="py-5 ">
                <div className="container">
                    <div className="row"><h1 className="my-3">Shoes Collection</h1></div>
                    <div className="row">
                           {shoes.map((item,index)=>{
                               return <Product key={item.id|| index} id={item.id} add={()=>addToCart(item)} title={item.title} price={item.price} img={item.img}/>
                            })}                    
                    </div>
                </div>
            </section>
        </>
    )
}
export default Shoes;