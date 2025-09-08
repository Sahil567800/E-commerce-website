import contactImg from "../assets/img/contact-img.jpeg"
export const Contact = () =>{
    return(
        <>
         <section id="contact" className="py-4">
                    <div className="container">
                        <div className="row">
                            <h1 className="my-4"> Contact US</h1>
                        </div>
                        <div className="row">
                           <div className="col-md-6">
                            <div className="contact-img">
                                    <img src={contactImg} width={'100%'} alt="" />
                            </div>
                           </div>
                           <div className="col-md-6">
                            <div className="contact-text">
                                <h5 className="fw-bold"> Our Location</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias consequuntur commodi iusto, quam reiciendis deserunt velit sint possimus voluptatibus.</p>
                                <p>tel:-123456790</p>
                                <p>sahiladmin@gmail.com</p>
                                <h5 className="fw-bold">Disclaimer</h5>
                                <p>This is Sahil Khan and this is not a real store this is just a pratice project
                                    for my MERN Stack Web Development. any product shown here does not belongs To me.
                                </p>
                            </div>
                           </div>
                        </div>
                    </div>
                    </section></>
    )
}