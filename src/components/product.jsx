import { Link } from "react-router-dom";
// import { useEffect,useContext } from "react";
import productContext from "./context";
const Product = ({ title, price, img, id, add }) => {
    return (
        <>
            <div className='col-6 col-sm-6 col-md-4 col-lg-3 my-2 bg-white'>
                <div className="shoe my-3 bg-white my-4">

                    <div className="my-3">
                        <Link to={`/selectedProduct/${id}`}>
                            <img src={img} width={"100%"} alt="" />
                        </Link>
                    </div>
                    <h4 className="my-3">{title}</h4>
                    <div className="d-flex justify-content-between my-2 ">
                        <h5 className="my-2 fw-bold align-self-center">${price}</h5>
                        <button className="btn bg-black text-white" onClick={add} >Add To Cart</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Product;