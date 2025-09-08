import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
export const Login= ()=>{
    const [input,setInput] = useState({email:'',password:''})
    const handleChange = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
    }
    const handleLogin =  async()=>{
        const req = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            })
        const res = await req.json()
        console.log(res)
    }
    return(
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
                        <button className="btn bg-black text-white px-4 my-1" onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}