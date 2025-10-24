import { useState, useContext } from "react"
import Product from "./product"
import { useEffect } from "react"
import { toast ,ToastContainer} from "react-toastify"
import cloth1 from '../assets/img/clothes/imgcard1.jpeg'
import { FaDotCircle } from "react-icons/fa"
const MyOrders = () => {
    const [Orders, setOrders] = useState([])


    const fetchOrders = async () => {
        const token = localStorage.getItem('token')
        if(!token){
            toast.warn("Please log in")
        }
        const req = await fetch('http://localhost:3000/api/order/myOrders', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        const res = await req.json();
        setOrders(res);
        console.log(res);
    }
    useEffect(() => {
        fetchOrders()
    }, [])
    const Product = () => {
        return(
            <>
            
        <div className="d-flex justify-content-between my-3">
                        
                       <img src={cloth1} width={'15%'} alt="" />
                        
                        <div className="d-flex flex-column">
                            <p>Men Rounded Pure Cotton T-shirt</p>
                            <div className="d-flex justify-content-between">
                                <p>$299</p>
                                <p>Quantity : 1</p>
                                <p>Size : XL</p>
                            </div>
                            <p>Order : Fri Aug 14 2025</p>
                            <p>Payment : COD</p>
                        </div>
                        <div className="">
                            <h4 className="border-down">Order Placed</h4>
                        </div>
                        <div className="">
                            <button className="bg-gray text-black p-2">Track Order</button>
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
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>

                </div>
            </section>
            <ToastContainer></ToastContainer>
        </>
    )
}
export default MyOrders