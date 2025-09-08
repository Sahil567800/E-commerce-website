import { GiEmptyChessboard } from "react-icons/gi"
import { FaTrashCan ,FaPlus,FaMinus} from "react-icons/fa6"
import { Link } from "react-router-dom"
import productContext from "./context"
import {  useContext, useEffect } from "react"

export const Cart = () => {
    const { cartItems, removeFromCart,setCardTotal,cardTotal,count,setCount} = useContext(productContext)
    useEffect(() => {
        const handleCardTotal = () => {
        setCardTotal(cartItems.reduce((total,item)=>{
            const price = parseInt(item.price)
            return total + price
        },0))
    }
        handleCardTotal()
    }, [cartItems])
   
    
    const Count =()=>{
        return(
            <>
             <div className="count mx-5">
                        <span onClick={()=>setCount(count-1)}><FaMinus/></span>
                        <span>{count}</span>
                        <span onClick={()=>setCount(count+1)}><FaPlus/></span>
                    </div></>
        )
    }
    const CartProduct = ({ title, price, img, id }) => {
        return (
            <>
                <div className="d-flex align-items-center justify-content-around my-3">
                    <img src={img} alt={title} width={'10%'} />
                    <div className="m-3">
                        <h3>{title}</h3>
                        <h5>${price}</h5>
                    </div>
                    <Count/>
                    <span className="mx-5" onClick={() => removeFromCart(id)} ><FaTrashCan /></span>
                </div>
            </>
        )
    }
    return (
        <>
            <section id="cart" className="py-3">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center"> My Cart</h1></div>
                    <div className="row">
                        <div className="cart py-4">

                            {cartItems.length !== 0 ? cartItems.map((item) => {
                                return <CartProduct key={item.id} id={item.id} title={item.title} price={item.price} img={item.img}></CartProduct>
                            }) : <div className="d-flex justify-content-center">
                                <h5 className="text-center align-self-center mx-1">Your Cart is Empty <GiEmptyChessboard /></h5>
                               <Link to={'/collection'}><button className="btn bg-black text-white my-3 mx-1">Add Items</button></Link> </div>}



                        </div>
                    </div>
                    <div className="row">
                        <div className="card-total">
                            <h3 className="my-2">Cart Totals</h3>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Subtotal</div>
                                <div className="cart-price">${cardTotal.toFixed(2)}</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Delivery Charge</div>
                                <div className="cart-price">$10.00</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Total</div>
                                <div className="cart-price">${(cardTotal+10).toFixed(2)}</div>
                            </div>
                            <div className="text-end">
                                <Link to='/delivery'><button className="btn bg-black text-white my-3">Place Order</button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}