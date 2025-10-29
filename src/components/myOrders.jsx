import { useState, useContext } from "react"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import cloth1 from '../assets/img/clothes/imgcard1.jpeg'
import { FaDotCircle } from "react-icons/fa"
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const apiBase = 'https://e-commerce-server-tcif.onrender.com'
    const fetchOrders = async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            return toast.warn("Please log in")
        }
        const req = await fetch(`${apiBase}/api/order/myOrders`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const res = await req.json();
        setOrders(res.data);

    }
    useEffect(() => {
        fetchOrders()
        console.log(orders);
    }, [])
    useEffect(() => {
        console.log("Orders updated:", orders)
    }, [orders])
    const fixImagePath = (imgPath) => {
        if (!imgPath) return null; // handle empty path
        // Replace '/src/assets/' with '/assets/' for public folder
        return imgPath.replace(/^\/?src\/assets\//, "/assets/");
    };

    const SingleOrder = ({ order }) => {
        return (
            <>

                <div className="d-flex justify-content-between my-5">


                    <div className="d-grid gap-2">
                        {order.items.map((product, idx) => (
                            <img
                                key={idx}
                                src={fixImagePath(product.img)}
                                width="100px"
                                height="100px"
                                style={{ objectFit: "cover" }}
                                alt={product.title}
                            />
                        ))}
                    </div>


                    <div className="d-flex flex-column">
                        {order.items.map((product, idx) => {
                            return <span className="fw-bold my-1 " key={idx}>{product.title}</span>
                        })}
                        <div className="d-flex justify-content-between">
                            <p>Total Price: ${order.totalPrice}</p>
                            <p>Qauntity : {order.quantity}</p>
                            {/* <p>Size : XL</p> */}
                        </div>
                        <p>Order Date: {new Date(order.date).toLocaleDateString()}</p>
                        {(() => {
                            const orderDate = new Date(order.date);
                            const deliveryDate = new Date(orderDate);
                            deliveryDate.setDate(orderDate.getDate() + 4);
                            return <p>Delivery on: {deliveryDate.toLocaleDateString()}</p>;
                        })()}
                        <p>Payment Method: {order.paymentMethod}</p>
                    </div>
                    <div className="">
                        <h4 className="border-down my-2">{order.status}</h4>
                    </div>
                    <div className="">
                        <button className="bg-gray text-black p-2 my-2">Track Order</button>
                    </div>
                </div></>
        )

    }
    return (
        <>
            <section id="my-order">
                <div className="container">
                    <div className="row">
                        <h1 className="my-3">MY ORDERS</h1>
                    </div>
                    {orders && orders.length > 0 ? (
                        orders.map(order => <SingleOrder key={order._id} order={order} />)
                    ) : (
                        <h3 className="text-center my-5">No Orders Found</h3>
                    )}



                </div>
                <ToastContainer></ToastContainer>
            </section>
        </>
    )
}
export default MyOrders