import { Link } from "react-router-dom";
import { useEffect,useContext } from "react";
import productContext from "./context";
const Product = ({ title, price, img,id,add}) => {
    
    return (
        <>
            <div className="col-md-3">
                <div className="shoe my-3 bg-white">
                    
                    <div className="">
                        <Link to={`/selectedProduct/${id}`}>
                        <img src={img} width={"100%"} alt="" />
                        </Link>
                    </div>
                    <h4>{title}</h4>
                    <h5 className="my-1 fw-bold">${price}</h5>
                    <button className="btn bg-black text-white my-1" onClick={add} >Add TO Cart</button>
                </div>
            </div>
        </>
    )
}
export default Product;