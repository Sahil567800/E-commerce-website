import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
export const ForgotPassword= ()=>{
    const [input,setInput] = useState('')
    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const handleForgot =  async()=>{
        const req = await fetch("http://localhost:3000/api/user/forgotPassword", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input)
            })
            console.log(input)
        const res = await req.json()
        console.log(res)
    }
    return(
        <>
        <section id='forgot' className="py-4">
            <div className="container">
                <div className="row">
                    <h1 className="my-2 text-center">Forgot Password?</h1>
                    <p className="text-center">Please Provide your account email address to recieve an email to reset your password</p>
                    </div>
                <div className="row">
                    <div className="login text-center">
                        <div className="email my-1">
                            <input type="text" placeholder="E-mail" value={input} name='email' onChange={handleChange} className="px-3 py-1 my-1" />                          
                        </div>
                        <button className="btn bg-black text-white px-4 my-1" onClick={handleForgot}>Submit</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}