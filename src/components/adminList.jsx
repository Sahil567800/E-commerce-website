import cloth1 from '../assets/img/clothes/imgcard1.jpeg'
const AdminList = () => {
    return (
        <>
            <div className="admin-list d-flex flex-column gap-3 p-3">
                <h5>All Product List</h5>
                <div className="row bg-gray fw-bold">
                    <div className="col-2"><li>Image</li></div>
                    <div className="col-2">  <li>Name</li></div>
                    <div className="col-2"> <li>Category</li></div>
                    <div className="col-2"> <li>Subcategory</li></div>
                    <div className="col-2"><li>Price</li></div>
                    <div className="col-2"><li>Action</li></div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <li><img src={cloth1} alt="black T-shirt" width={'50%'} /></li>
                    </div>
                    <div className="col-2">
                        <li>MEN'S Printed T-shirt</li>
                    </div>
                    <div className="col-2">
                        <li>Clothes</li>
                    </div>
                     <div className="col-2">
                        <li>Men</li>
                    </div>
                    <div className="col-2"><li>$149</li></div>
                    <div className="col-2">
                        <li>X</li>
                    </div>

                </div>

                <div className="row">
                    <div className="col-2">
                        <li><img src={cloth1} alt="black T-shirt" width={'50%'} /></li>
                    </div>
                    <div className="col-2">
                        <li>MEN'S Printed T-shirt</li>
                    </div>
                    <div className="col-2">
                        <li>Clothes</li>
                    </div>
                     <div className="col-2">
                        <li>Men</li>
                    </div>
                    <div className="col-2"><li>$149</li></div>
                    <div className="col-2">
                        <li>X</li>
                    </div>

                </div>

                <div className="row">
                    <div className="col-2">
                        <li><img src={cloth1} alt="black T-shirt" width={'50%'} /></li>
                    </div>
                    <div className="col-2">
                        <li>MEN'S Printed T-shirt</li>
                    </div>
                    <div className="col-2">
                        <li>Clothes</li>
                    </div>
                     <div className="col-2">
                        <li>Men</li>
                    </div>
                    <div className="col-2"><li>$149</li></div>
                    <div className="col-2">
                        <li>X</li>
                    </div>

                </div>

                <div className="row">
                    <div className="col-2">
                        <li><img src={cloth1} alt="black T-shirt" width={'50%'} /></li>
                    </div>
                    <div className="col-2">
                        <li>MEN'S Printed T-shirt</li>
                    </div>
                    <div className="col-2">
                        <li>Clothes</li>
                    </div>
                     <div className="col-2">
                        <li>Men</li>
                    </div>
                    <div className="col-2"><li>$149</li></div>
                    <div className="col-2">
                        <li>X</li>
                    </div>

                </div>

            </div>
        </>
    )
}
export default AdminList;