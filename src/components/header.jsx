import { FaBars, FaMagnifyingGlass, FaCartShopping, FaUser } from "react-icons/fa6"
import { FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import productContext from './context'
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const [searchBar, setSearchBar] = useState(false)
    const [show,setShow] = useState(false)
    const [input, setInput] = useState('')
    const [matchedProducts, setMatchedProducts] = useState([])
    const { products, user,setUser } = useContext(productContext)


    const handleSearch = () => {
        const searchedProduct = products.filter(item => item.title.toLowerCase().includes(input.toLowerCase().trim()))
        setMatchedProducts(searchedProduct)
    }
    const handleLogout=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser('')
        toast.success("Logged out successfully")
    }
    useEffect(() => {
        handleSearch()
    }, [input])
    useEffect(()=>{
        const savedUser = localStorage.getItem("user")
        const savedToken = localStorage.getItem("token")
        if(savedToken&&savedToken){
            setUser(JSON.parse(savedUser))
        }
    },[])
    const Li = ({ title, id }) => {
        return (<>
            <Link to={`selectedProduct/${id}`}> <li onClick={()=>{setSearchBar(false)}} className="px-1 py-1 text-black bg-white border-bottom">{title}</li></Link>
        </>)
    }
    console.log(user)
    return (
        <>
            <header className="bg-black py-3 text-white sticky-top">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <div className="menu text-center large ">
                                <div className="offcanvas offcanvas-start" id="demo">
                                    <div className="offcanvas-header">
                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="p-0">
                                            <Link to='/'><li className="my-2 text-black" data-bs-dismiss='offcanvas'>Home</li></Link>
                                            <Link to='/about'><li className="my-2 text-black" data-bs-dismiss='offcanvas'>About Us</li></Link>
                                            <Link to='/contact'><li className="my-2 text-black" data-bs-dismiss='offcanvas'>Contact Us</li></Link>
                                            <Link to='/collection'><li className="my-2 text-black" data-bs-dismiss='offcanvas'>Collection</li></Link>
                                        </ul>
                                        <Link to={'/login'}><button className="btn bg-black text-white px-4" type="button" data-bs-dismiss='offcanvas'>Login</button></Link>
                                    </div>
                                </div>
                                <button className="btn bg-black text-white pt-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <FaBars />
                                </button>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="search text-center large">
                                {!searchBar ? <FaMagnifyingGlass onClick={() => setSearchBar(true)} /> :
                                    <div className="searchbar d-flex"><input type="text" className="px-2" onChange={
                                        (e) => { setInput(e.target.value) }} placeholder="Search Products" />
                                        <button className="btn bg-gray" onClick={() => setSearchBar(false)}><FaTimes /></button></div>
                                }
                                {searchBar && input && <ul className="dd">
                                    {matchedProducts.map((item) => { return <Li  key={item.id} id={item.id} title={item.title}></Li> })}

                                </ul>}
                            </div>
                        </div>
                        {/* <div className="col-1"></div> */}
                        <div className="col-3">
                            <div className="logo text-center">
                                <Link to={'/'}><h5 className="fw-bold">SSTORE</h5></Link>
                            </div>
                        </div>
                        <div className="col-1"></div>
                        <div className="col-1">
                            <div className="Cart text-center large">
                                <Link to='/cart'><FaCartShopping /></Link>
                            </div>
                        </div>
                        <div className="col-2">
                              <div className="user fw-bold text-center large " onClick={()=>setShow(!show)}>
                                {user?user.username:<FaUser />}
                                <div className={ show?`d-block user-dd px-3`:'d-none '}>
                                  {user?<p onClick={handleLogout}>Log out</p>: <Link to='/login'><p className="text-black">Log in</p></Link> }
                                    <Link to={'/myorders'}><p className="text-black">My orders</p></Link>
                                    </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </header>
           <ToastContainer position="top-right" autoClose={2000} ></ToastContainer>
        </>)
}

export default Header;