import { GiEmptyChessboard } from "react-icons/gi"
import { FaTrashCan } from "react-icons/fa6"
import { Link } from "react-router-dom"
import productContext from "./context"
import { useState, useContext, useEffect } from "react"

export const Cart = () => {
    const { cartItems, removeFromCart,setCardTotal,products,cardTotal} = useContext(productContext)
    useEffect(() => {
        const handleCardTotal = () => {
        setCardTotal(cartItems.reduce((total,item)=>{
            const price = parseInt(item.price)
            return total + price
        },0))
        console.log(cartItems,'cart')
        console.log(cardTotal,'total')
    }
        handleCardTotal()
    }, [cartItems])
    
    const Div = ({ title, price, img, id }) => {
        return (
            <>
                <div className="d-flex">
                    <img src={img} alt={title} width={'10%'} />
                    <div className="mx-3">
                        <h3>{title}</h3>
                        <h5>${price}</h5>
                    </div>
                    <span className="mx-3" onClick={() => removeFromCart(id)} ><FaTrashCan /></span>
                </div>
            </>
        )
    }
    return (
        <>
            <section id="cart" className="py-3">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center">Cart</h1></div>
                    <div className="row">
                        <div className="cart py-4">

                            {cartItems.length !== 0 ? cartItems.map((item) => {
                                return <Div key={item.id} id={item.id} title={item.title} price={item.price} img={item.img}></Div>
                            }) : <div><h5 className="text-center align-self-center mx-1">Your Cart is Empty <GiEmptyChessboard /></h5>
                                <button className="btn bg-black text-white my-3 mx-1">Add Items</button></div>}



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