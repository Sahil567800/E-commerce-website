import { Login } from "./login"

const AdminLogin = () => {
    return (
        <>
            <section id="admin-Login" className="bg-gray py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-4 my-5">
                            <div className="admin-login bg-white py-3 px-3">
                                <h3 className="fw-bold my-2">Admin Panel</h3>
                                <div className="email d-flex flex-column">
                                    <label htmlFor="Email">Emai Address</label>
                                    <input type="text" name="" id="" className="" />
                                </div>
                                <div className="pass d-flex flex-column">
                                    <label htmlFor="Password">Password</label>
                                    <input type="text" name="" id="" />
                                </div>
                                <div className="text-center my-4">
                                    <button className="btn bg-black text-white">Submit</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default AdminLogin;