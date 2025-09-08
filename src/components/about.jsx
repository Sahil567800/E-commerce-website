import aboutImg from "../assets/img/istockphoto-1338894509-612x612.jpg"
const About = () => {
    return (
        <>
            <section id="about" className="py-4">
                <div className="container">
                    <div className="row">
                        <h1 className="my-4"> About Us</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="about-img">
                                <img src={aboutImg} width={'100%'} alt="" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="about-text">
                                <h5 className="fw-bold my-3">SSTORE</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae harum perspiciatis, amet ad itaque, molestias exercitationem voluptas natus unde, excepturi necessitatibus! Ipsa, delectus sapiente. Aut veniam excepturi veritatis quidem, quos voluptate qui animi inventore facilis eos ipsum iusto numquam explicabo dicta sint! Veritatis magni illo neque maiores vel id! Ipsa distinctio libero nemo suscipit minima repellendus recusandae molestias, delectus fugit tenetur nisi ea rerum labore quaerat provident? Quasi obcaecati porro, quidem explicabo deserunt cum vitae quo totam!</p>
                                <h5 className="fw-bold">Disclaimer</h5>
                                <p>This is Sahil Khan and this is not a real store this is just a pratice project
                                    for my MERN Stack Web Development. any product shown here does not belongs To me.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3 className="my-4">Why Choose Us</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="">
                                <h6 className="fw-bold">Quality Assurance</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam architecto esse doloribus unde obcaecati alias dolorum culpa sint impedit!</p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                 <h6 className="fw-bold">Convenience</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam architecto esse doloribus unde obcaecati alias dolorum culpa sint impedit!</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="">
                                <h6 className="fw-bold">Exceptional Customer Service</h6>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores laboriosam architecto esse doloribus unde obcaecati alias dolorum culpa sint impedit!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;