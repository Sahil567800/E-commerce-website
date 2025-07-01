import Shoes from "./shoes";
import Clothes from "./clothes";
import { Banner } from "./banner";
import { BestSeller } from "./bestseller";
const Home = ()=>{
    return(
        <>
        <Banner/>
        <Shoes></Shoes>
        <Clothes></Clothes>
        <BestSeller/>
        </>

    )
}
export default Home;