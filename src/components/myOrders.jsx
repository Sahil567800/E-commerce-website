import { useState ,useContext} from "react"
import Product from "./product"
const MyOrders = () => {
    const [Orders,setOrders] = useState([])

    const fetchOrders = async () => {
        const req = await fetch('http://localhost:5000/api/orders', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        });
        const res = await req.json();
        setOrders(res);
        console.log(res);
    }
    return(
        <>
        <section id="my-order">
            <div className="container">
                <div className="row">
                    <h1 className="my-3">MY ORDERS</h1>
                    <div className="row">
                        {/* {Orders.map((item) => {
                            return <MyOrders></MyOrders>
                        } */}
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default MyOrders