import styled from "styled-components";
import Services from "./Services";
import SocialMedia from "./SocialMedia";
import Subscribe from "./Subscribe";
import Terms from "./Terms";


const Footer = () => {
     return (
         <FooterLayout>
            <div className="section">
                <SocialMedia/>
                <Services/>
                <Subscribe/>
            </div>
            <Terms/>
         </FooterLayout>
         
     )
};


export default Footer ;


const FooterLayout = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: rgb(48, 48, 50);
    justify-content: space-evenly;
    .section { 
        display: flex;
        height: 60vh;
        justify-content: center;
        align-items: center;
    > * {
        direction: rtl;
        color: white;
    }
    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
        height: 80vh;
        padding-top: 3rem;
        padding: 3rem 2rem 0 2rem;
    }
    @media only screen and (max-width: 775px) {
        height: 120vh;
    }
    @media only screen and (max-width: 520px){
        height: 125vh;
    }
}
`;