import { FaPlus } from "react-icons/fa6"
const AdminAdd = () => {
    return (
        <>
            <div className="admin- d-flex flex-column gap-2 p-3">
                <h5>Upload Image</h5>
                <div className="d-flex gap-2">
                    <div className="upload ">
                        <label htmlFor="upload" className="border-black border p-5">
                            <FaPlus></FaPlus>
                        </label>
                        <input type="file" name="upload" id="upload" className="d-none" accept="image/*" />
                    </div>
                </div>
                <div className="d-flex flex-column gap-3">
                    <label>Product Name</label>
                    <input type="text" placeholder="Type here" />
                </div>
                <div className="d-flex flex-column gap-3">
                    <label>Product Description</label>
                    <textarea placeholder="Write Content Here" />
                </div>
                <div className="d-flex gap-3">
                    <div className="d-flex flex-column gap-2">
                        <h5>Product Category</h5>
                        <select name="" id="">
                            <option value="">Men</option>
                            <option value="">Women</option>
                        </select>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <h5>Sub Category</h5>
                        <select name="" id="">
                            <option value="">Clothes</option>
                            <option value="">Shoes</option>
                        </select>
                    </div>
                    <div className="d-flex flex-column gap-2">
                        <h5>Product Rate</h5>
                        <input type="text" name="" id="" placeholder="300" />
                    </div>
                </div>
                <h5>Product Sizes</h5>
                <div className="d-flex gap-2">
                    <div className="upload border p-1 fw-bold">S</div>
                    <div className="upload border p-1 fw-bold">M</div>
                    <div className="upload border p-1 fw-bold">L</div>
                    <div className="upload border p-1 fw-bold">XL</div>
                    <div className="upload border p-1 fw-bold">XXL</div>
                </div>
                <div className="d-flex gap-1">
                    <input type="checkbox" />
                    <label htmlFor="">Add to bestSeller</label>
                </div>
                <div className="">
                    <button className="btn bg-black text-white px-4 ">Add</button>
                </div>
            </div>
        </>
    )
}
export default AdminAdd;