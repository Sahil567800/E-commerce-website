import { Link } from "react-router-dom"
export const Login= ()=>{
    return(
        <>
        <section id='login' className="py-4">
            <div className="container">
                <div className="row"><h1 className="my-2 text-center">Login</h1></div>
                <div className="row">
                    <div className="login text-center">
                        <div className="email my-1">
                            <input type="text" placeholder="E-mail"  className="px-3 py-1 my-1" />                          
                        </div>
                        <div className="password">
                             <input type="password" className="px-3 py-1 my-1" placeholder="Password" />
                        </div>
                        <p>Don't have an account? <Link to='/signup'><span>Sign Up</span></Link> </p>
                        <button className="btn bg-black text-white px-4 my-1">Login</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}