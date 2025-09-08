import { FaBars, FaMagnifyingGlass, FaCartShopping, FaUser } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import productContext from './context'
const Header = () => {
    const [searchBar, setSearchBar] = useState(false)
    const [input, setInput] = useState('')
    const [matchedProducts, setMatchedProducts] = useState([])
    const {products} = useContext(productContext)

   
    const handleSearch = () => {
        const searchedProduct = products.filter(item => item.title.toLowerCase().includes(input.toLowerCase().trim()))
        setMatchedProducts(searchedProduct)
    }
     useEffect(() => {
        handleSearch()
    }, [input])
    const Li = ({ title,id }) => {
        return (<>
           <Link to={`selectedProduct/${id}`}> <li className="px-1 py-1 text-black bg-white border-bottom">{title}</li></Link>
        </>)
    }
    return (
        <>
            <header className="bg-black py-3 text-white sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <div className="menu text-center large">
                                <div className="offcanvas offcanvas-start" id="demo">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="p-0">
                                            <Link to='/'><li className="my-2 text-black">Home</li></Link>
                                            <Link to='/about'><li className="my-2 text-black">About Us</li></Link>
                                            <Link to='/contact'><li className="my-2 text-black">Contact Us</li></Link>
                                            <Link to='/collection'><li className="my-2 text-black">Collection</li></Link>
                                        </ul>
                                        <Link to={'/login'}><button className="btn bg-black text-white px-4" type="button">Login</button></Link>
                                    </div>
                                </div>
                                <button className="btn bg-black text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <FaBars />
                                </button>

                            </div>
                        </div>
                        <div className="col-3">
                            <div className="search text-center large">
                                {!searchBar ? <FaMagnifyingGlass onClick={() => setSearchBar(true)} /> :
                                    <div className="searchbar d-flex"><input type="text" className="px-2" onChange={
                                        (e) => { setInput(e.target.value) }} placeholder="Search Products" />
                                        <button className="btn bg-gray" onClick={() => setSearchBar(false)}><FaTimes /></button></div>
                                }
                                {searchBar && input && <ul className="dd">
                                    {matchedProducts.map((item) => {return <Li key={item.id} id={item.id} title={item.title}></Li>})}

                                </ul>}
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