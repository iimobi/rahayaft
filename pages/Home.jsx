import AboutUs from "../Components/AboutUs";
import BestServices from "../Components/BestServices";
import Header from "../Components/Header/Header";
import UsServices from "../Components/UsServices"
import MyVideo from "../Components/MyVideo";
const Home = () => {
   
    return ( 
        <>
            <Header/>
            <UsServices/>
            <AboutUs/>
            <BestServices/>
            <MyVideo/>
            
        </>
     );
}
 
export default Home;