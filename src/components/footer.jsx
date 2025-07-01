import { FaFacebook, FaYoutube, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom";

const Footer = () => {


    return (
        <>
            <footer className="bg-black text-white pt-3">
                <div className="container">
                    <div className="row border-down">
                        <div className="col-md-3">
                            <div className='list'>
                                <div className="heading" > <h3>SUPPORT </h3></div>
                                <ul className="p-0">
                                    <li className="my-2">Contact us</li>
                                    <li className="my-2">Promotions & Sale</li>
                                    <li className="my-2">Track Order</li>
                                    <li className="my-2">Shoe Care</li>
                                    <li className="my-2">Tech Glossary</li>
                                    <li className="my-2">Initiate Return / Exchange</li>
                                    <li className="my-2">Cookie Settings</li>
                                </ul>
                            </div>
                        </div>


                        <div className="col-md-3">
                            <div className="">
                                <div className=" "><h3>ABOUT </h3></div>
                                <ul className="p-0">
                                    <li className="my-2">Company</li>
                                    <li className="my-2">Corporate News</li>
                                    <li className="my-2">Press Center</li>
                                    <li className="my-2">Investors</li>
                                    <li className="my-2">Sustainability</li>
                                    <li className="my-2">Careers</li>
                                    <li className="my-2">Store Locator</li>
                                    <li className="my-2">PUMA Articles</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="" > <h3>PAGES</h3></div>
                            <ul className="p-0">
                                <Link to='/'><li className="my-2">Home</li></Link>   
                                <Link to='/about'><li className="my-2">About Us</li></Link>  
                                <Link to='/contact'><li className="my-2">Contact Us</li></Link>  
                                <Link to='/collection'><li className="my-2">Collection</li></Link>  
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <div className="">
                                <div className="" > <h3>STAY UPTO DATE </h3></div>
                                <ul className="">
                                    <li className="my-2 large">
                                        <FaFacebook className="align-self-center mx-2" /> Facebook
                                    </li>
                                    <li className="my-2 large">
                                        <FaYoutube className="align-self-center mx-2" />Youtube
                                    </li>
                                    <li className="my-2 large"><FaInstagram className="align-self-center mx-2" />Instagram</li>
                                    <li className="my-2 large"><FaPinterest className="align-self-center mx-2" />Pinterest</li>
                                    <li className="my-2 large"><FaTwitter className="align-self-center mx-2" />Twitter</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <p className="text-center mt-2"> Designed & Developed by Sahil Khan</p>
                    </div>

                </div>
            </footer>
        </>
    )
}
export default Footer;