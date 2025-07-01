import { FaBars, FaMagnifyingGlass, FaCartShopping, FaUser } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [searchBar, setSearchBar] = useState(false)
    return (
        <>
            <header className="bg-black py-3 text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <div className="menu text-center large">
                                <div class="offcanvas offcanvas-start" id="demo">
                                    <div class="offcanvas-header">
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <ul className="p-0">
                                            <Link to='/'><li className="my-2 text-black">Home</li></Link>
                                            <Link to='/about'><li className="my-2 text-black">About Us</li></Link>
                                            <Link to='/contact'><li className="my-2 text-black">Contact Us</li></Link>
                                            <Link to='/collection'><li className="my-2 text-black">Collection</li></Link>
                                        </ul>
                                        <button class="btn bg-black text-white px-4" type="button">Login</button>
                                    </div>
                                </div>
                                <button class="btn bg-black text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <FaBars />
                                </button>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="search text-center large">
                                {!searchBar ? <FaMagnifyingGlass onClick={() => setSearchBar(true)} /> :
                                    <div className="searchbar d-flex"><input type="text" placeholder="Search Products" />
                                        <button className="btn bg-gray" onClick={() => setSearchBar(false)}><FaTimes /></button></div>
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="logo text-center">
                                <Link to={'/'}><h5 className="fw-bold">SSTORE</h5></Link>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="Cart text-center large">
                                <Link to='/cart'><FaCartShopping /></Link>
                            </div>
                        </div>
                        <div className="col-1">
                            <div className="user text-center large">
                                <Link to='/login'> <FaUser /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>)
}

export default Header;