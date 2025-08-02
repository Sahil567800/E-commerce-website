export const Delivery = () => {
    return (
        <>
            <section id="delivery" className="py-5">
                <div className="container">
                    <div className="row"><h1>DELIVERY INFORMATION</h1></div>
                    <div className="row">
                        <div className="col-md-6"> <div className="delivery">
                            <div className="name my-3">
                                <input type="text" placeholder="First name" className="p-1 mx-1" />
                                <input type="text" placeholder="Last name" className="p-1 mx-1" />
                            </div>
                            <div className="email my-3">
                                <input type="text" placeholder="Email address" className="p-1" />
                            </div>

                            <div className=" my-3"><input type="text" placeholder="Street" className="p-1" /></div>
                            <div className=" my-3">
                                <input type="text" placeholder="City" className="p-1 mx-1" />
                                <input type="text" placeholder="State" className="p-1 mx-1" />
                            </div>
                            <div className=" my-3">
                                <input type="text" placeholder="Zipcode" className="p-1 mx-1" />
                                <input type="text" placeholder="Country" className="p-1 mx-1" />
                            </div>

                            <div className=" my-3"><input type="text" placeholder="Phone" className="p-1" /></div>
                        </div></div>
                        <div className="col-md-6">
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
                                <h5 className="my-2">PAYMENT METHOD</h5>
                                <div className="m-1"> <input type="radio" name="payment"/> <label htmlFor="CASH ON DELIVERY">CASH ON DELIVERY</label></div>
                                <div className="m-1"> <input type="radio" name="payment"/> <label htmlFor="UPI">UPI</label></div>
                                <div className="m-1"><input type="radio" name="payment"/> <label htmlFor="CASH ON DELIVERY">CASH ON DELIVERY</label></div>
                               
                               
                             
                                <div className="text-end">
                                    <button className="btn bg-black text-white my-3">Place Order</button>
                                </div>
                            </div>
                        </div>

                    </div>
                  
                </div>
            </section>
        </>
    )

}