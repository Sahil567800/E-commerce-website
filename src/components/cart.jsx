import { GiEmptyChessboard } from "react-icons/gi"
import { FaTrashCan, FaPlus, FaMinus } from "react-icons/fa6"
import { Link } from "react-router-dom"
import productContext from "./context"
import { useContext, useEffect } from "react"

export const Cart = () => {
    const { cartItems, removeFromCart, setCardTotal, cardTotal, addToCart } = useContext(productContext)
    useEffect(() => {
        const handleCardTotal = () => {
            setCardTotal(cartItems.reduce((total, item) => {
                const price = parseInt(item.price)
                return total + price
            }, 0))
        }
        handleCardTotal()
    }, [cartItems])


    const Count = ({ item }) => {
        return (
            <div className="count">
                <span
                    className="mx-3"
                    onClick={() => removeFromCart(item.id)}
                >
                    <FaMinus />
                </span>
                <span>{item.quantity}</span>
                <span
                    className="mx-3"
                    onClick={() => addToCart(item)}
                >
                    <FaPlus />
                </span>
            </div>
        );
    };

    const CartProduct = ({ item }) => {
        return (
            <div className="row align-items-center my-3">
                <div className="col-md-3 my-2">
                    <img src={item.img} alt={item.title} width={'50%'} />
                </div>
                <div className="col-md-5 my-2">
                    <div className="m-3">
                        <h3>{item.title}</h3>
                        <h5>${item.price}</h5>
                    </div>
                </div>
                <div className="col-md-3 my-2">
                    <Count item={item} />
                </div>
                <div className="col-md-1 my-2">
                    <span onClick={() => removeFromCart(item.id)}>
                        <FaTrashCan />
                    </span>
                </div>
            </div>
        );
    };
    return (
        <>
            <section id="cart" className="py-3">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center"> My Cart</h1></div>
                    <div className="row">
                        <div className="cart py-4">

                            {cartItems.length !== 0 ? (
                                cartItems.map((item) => <CartProduct key={item.id} item={item} />)
                            ) : (
                                <div className="d-flex justify-content-center">
                                    <h5 className="text-center align-self-center mx-1">
                                        Your Cart is Empty <GiEmptyChessboard />
                                    </h5>
                                    <Link to={'/collection'}>
                                        <button className="btn bg-black text-white my-3 mx-1">Add Items</button>
                                    </Link>
                                </div>
                            )}



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
                                <div className="cart-price">${(cardTotal + 10).toFixed(2)}</div>
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