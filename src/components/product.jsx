const Product = ({ title, price, img }) => {
    return (
        <>
            <div className="col-md-3">
                <div className="shoe my-3 bg-white">
                    <div className="">
                        <img src={img} width={"100%"} alt="" />
                    </div>
                    <h4>{title}</h4>
                    <h5 className="my-1 fw-bold">{price}</h5>
                </div>
            </div>
        </>
    )
}
export default Product;