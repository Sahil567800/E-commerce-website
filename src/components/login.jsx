import { Link } from "react-router-dom"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import productContext from "./context";
import { useContext } from "react";
export const Login = () => {
    
    const [input, setInput] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const {user,setUser} = useContext(productContext)
    const navigate = useNavigate()
    
    const handleLogin = async () => {
        try{
        if (!input.email || !input.password) {
            toast.warn("Please fill input fields")
            return
        }
        const req = await fetch("http://localhost:3000/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input)
        })
        const res = await req.json()
        if (!res.data.token) {
            toast.error(res.message);
            return;
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', res.data.user)
        console.log(res.data,'data')
        setUser(res.data.user)
        console.log(user,'user')
        navigate('/')
    }
    catch(error){
        console.error(error)
        toast.error("Something went wrong")
    }
    }
    return (
        <>
            <section id='login' className="py-4">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center">Login</h1></div>
                    <div className="row">
                        <div className="login text-center">
                            <div className="email my-1">
                                <input type="text" placeholder="E-mail" value={input.email} name='email' onChange={handleChange} className="px-3 py-1 my-1" />
                            </div>
                            <div className="password">
                                <input type="password" className="px-3 py-1 my-1" value={input.password} name='password' onChange={handleChange} placeholder="Password" />
                            </div>
                            <p>Don't have an account? <Link to='/signup'><span>Sign Up</span></Link> </p>
                            <p> <Link to='/forgot'><span>Forgot Password</span></Link> </p>
                            <button className="btn bg-black text-white px-4 my-1" onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer position="top-right" autoClose={2000} />
        </>
    )
}