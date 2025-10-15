import { FaPlus,FaBars,FaJediOrder} from "react-icons/fa6";
const DashBoard = () => {
    return (
        <>
        <div className="dashboard shadow-lg py-3 bg-gray">
            <ul className="d-flex flex-column gap-3">
                <li className="d-flex gap-1 justify-content-center py-1 bg-white"> <FaPlus className="align-self-center fw-bold"></FaPlus><span className="">Add items</span></li>
                <li className="d-flex gap-1 justify-content-center py-1 bg-white"> <FaBars className="align-self-center fw-bold"></FaBars><span className="">List items</span></li>
                <li className="d-flex gap-1 justify-content-center py-1 bg-white"> <FaJediOrder className="align-self-center fw-bold"></FaJediOrder><span className="">Orders</span></li>
            </ul>
        </div>
        </>
    )
}
export default DashBoard;