import {GiEmptyChessboard} from "react-icons/gi"
export const Cart = () => {
    return (
        <>
            <section id="cart" className="py-3">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center">Cart</h1></div>
                    <div className="row">
                        <div className="cart py-4 d-flex  justify-content-center">
                            <h5 className="text-center align-self-center mx-1">Your Cart is Empty <GiEmptyChessboard/></h5>
                        <button className="btn bg-black text-white my-3 mx-1">Add Items</button>    
                        </div>
                    </div>
                    <div className="row">
                        <div className="card-total">
                            <h3 className="my-2">Card Totals</h3>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Subtotal</div>
                                <div className="cart-price">$0.00</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Delivery Charge</div>
                                <div className="cart-price">$10.00</div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="cart-text">Total</div>
                                <div className="cart-price">$0.00</div>
                            </div>
                            <div className="text-end">
                            <button className="btn bg-black text-white my-3">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}