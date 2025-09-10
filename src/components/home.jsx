import Shoes from "./shoes";
import Clothes from "./clothes";
import { Banner } from "./banner";
import { BestSeller } from "./bestseller";
const Home = ()=>{
    return(
        <>
        <Banner/>
        <Clothes></Clothes>
        <Shoes></Shoes>
        <BestSeller/>
        </>

    )
}
export default Home;