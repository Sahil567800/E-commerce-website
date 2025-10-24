import { useContext, useState } from "react"
import productContext from "./context"
import { ToastContainer, toast } from "react-toastify"
export const Delivery = () => {
    const { cardTotal, cartItems, user } = useContext(productContext)
    const [data, setdata] = useState({
        fullName: '',
        email: user.email,
        area: '',
        phone: '',
        city: '',
        state: '',
        building: '',
        zipcode: '',
        country: ''
    })
    const [paymentMethod, setPaymentMethod] = useState(null)
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!paymentMethod) return toast.warn("Please select a payment method");

        const token = localStorage.getItem("token");
        if (!token) return toast.warn("User not logged in");

        const order = {
            items: cartItems,
            quantity: cartItems.reduce((sum, item) => sum + item.quantity, 0),
            totalPrice: cardTotal + 10,  // include delivery charge if needed
            user: user.id || user._id,    // ensure it’s the user ID
            shippingAddress: data,
            paymentMethod: paymentMethod,
            date: new Date()
        };

        try {
            const req = await fetch(`http://localhost:3000/api/order/${paymentMethod}`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(order)
            });

            const res = await req.json();
            if (!req.ok) return toast.warn(res.message);

            toast.success(res.message);
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <>
            <section id="delivery" className="py-5">
                <div className="container">
                    <div className="row"><h1>DELIVERY INFORMATION</h1></div>
                    <div className="row">
                        <div className="col-md-6"> <div className="delivery">

                            <input type="text" placeholder="Full name" onChange={handleChange} value={data.fullName} name="fullName" className="p-1 my-1" />
                            {/* <input type="text" placeholder="Email address" className="p-1 my-1" /> */}


                            <input type="text" onChange={handleChange} name="area" value={data.area} placeholder="Area, Street, Sector" className="p-1 my-2" />
                            <input type="text" onChange={handleChange} name="phone" value={data.phone} placeholder="Phone" className="p-1 my-2" />


                            <input type="text" onChange={handleChange} name="city" value={data.city} placeholder="City" className="p-1 my-1" />
                            <input type="text" onChange={handleChange} name="state" value={data.state} placeholder="State" className="p-1 my-1" />

                            <input type="text" onChange={handleChange} name="building" value={data.building} placeholder="House/Building" className="p-1 my-1" />
                            <input type="text" onChange={handleChange} name="zipcode" value={data.zipcode} placeholder="Zipcode" className="p-1 my-1" />


                            <input type="text" onChange={handleChange} name="country" value={data.country} placeholder="Country" className="p-1 my-1" />



                        </div></div>
                        <div className="col-md-6">
                            <div className="card-total">
                                <h3 className="my-2">Card Totals</h3>
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

                                <h5 className="my-2">PAYMENT METHOD</h5>
                                <div className="m-1"> <input type="radio" onClick={() => setPaymentMethod('COD')} name="payment" /> <label htmlFor="CASH ON DELIVERY">CASH ON DELIVERY</label></div>
                                <div className="m-1"> <input type="radio" name="payment" /> <label htmlFor="UPI">UPI</label></div>
                                <div className="m-1"><input type="radio" name="payment" /> <label htmlFor="CASH ON DELIVERY">RazorPay</label></div>



                                <div className="text-end">
                                    <button className="btn bg-black text-white my-3" onClick={handleSubmit}>Place Order</button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <ToastContainer></ToastContainer>
            </section>
        </>
    )

}