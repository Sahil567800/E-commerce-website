import { Link } from "react-router-dom"
export const Signup= ()=>{
    return(
        <>
        <section id='signup' className="py-4">
            <div className="container">
                <div className="row"><h1 className="my-2 text-center">Sign Up</h1></div>
                <div className="row">
                    <div className="signup text-center">
                        <div className="email my-1">
                            <input type="text" placeholder="E-mail"  className="px-3 py-1 my-1" />                          
                        </div>
                        <div className="username">
                             <input type="text" className="px-3 py-1 my-1" placeholder="Username" />
                        </div>
                        <div className="password">
                             <input type="password" className="px-3 py-1 my-1" placeholder="Password" />
                        </div>
                        <p>Already have an account? <Link to='/login'><span>Sign Up</span></Link> </p>
                        <button className="btn bg-black text-white px-4 my-1">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}