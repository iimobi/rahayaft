import Slider from "./Slider";
import UsServices from "./UsServices";
import AboutUs from "./AboutUs";
import BestServices from "./BestServices";
import MyVideo from "./MyVideo";
import Client from "../Client";
import Email from "../Email";
import Project from "./Project";


const HomePage = () => {
    return(
        <>
            <Slider/>
            <UsServices/>
            <AboutUs/>
            <BestServices/>
            <MyVideo/>
            <Client/>
            <Email/>
            <Project/>
        </>
    )
}

export default HomePage;