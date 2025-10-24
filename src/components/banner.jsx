import bannerImg from "../assets/img/ecommerce-banner.jpg"
export const Banner = () => {
    return(
        <>
        <div className="container-fluid p-0">
            <div className="row">
                <div className="banner">
                    <img src={bannerImg} alt="banner" width={"100%"} />
                </div>
            </div>
        </div>
        </>
    )
}

