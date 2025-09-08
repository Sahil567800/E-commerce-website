import { Link } from "react-router-dom"
import { useState } from "react"
export const Signup = () => {
    const [inputs, setInputs] = useState({ email: '', password: '', username: '' })
    const handleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const handleSignup=async()=>{
        const req = await fetch('http://localhost:3000/api/user/register',{
            method:"POST",
            headers:{'content-type':"application/json"},
            body:JSON.stringify(inputs)
        })
        const res = await req.json()
        console.log(res)
    }
    return (
        <>
            <section id='signup' className="py-4">
                <div className="container">
                    <div className="row"><h1 className="my-2 text-center">Sign Up</h1></div>
                    <div className="row">
                        <div className="signup text-center">
                            <div className="email my-1">
                                <input type="text" placeholder="E-mail" value={inputs.email} name="email" onChange={handleChange} className="px-3 py-1 my-1" />
                            </div>
                            <div className="username">
                                <input type="text" className="px-3 py-1 my-1" placeholder="Username" value={inputs.username} name="username" onChange={handleChange} />
                            </div>
                            <div className="password">
                                <input type="password" className="px-3 py-1 my-1" placeholder="Password" value={inputs.password} name="password" onChange={handleChange} />
                            </div>
                            <p>Already have an account? <Link to='/login'><span>Login</span></Link> </p>
                            <button className="btn bg-black text-white px-4 my-1" onClick={handleSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}