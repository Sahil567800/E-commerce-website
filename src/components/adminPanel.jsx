import AdminAdd from './adminAdd';
import DashBoard from '../components/dashboard'
import AdminList from './adminList';
import AdminOrders from './adminOrders'
const AdminPanel = () => {
    return(
        <>
        <header className='py-2 shadow-lg'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='fw-bold'>SSTORE</h1>
                    </div>
                    <div className="col-md-6 text-end">
                        <button className='btn text-white bg-black'>Logout</button>
                    </div>
                    
                </div>
            </div>
        </header>
        <section>
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-2">
                        <DashBoard></DashBoard>
                    </div>
                    <div className="col-8">
                      <AdminOrders></AdminOrders>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default AdminPanel;