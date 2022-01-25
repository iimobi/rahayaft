import Client from "../Client";
import Email from "../Email";
import PageTitle from "../PageTitle";
import Philosophy from "./Philosophy";

const AboutPage = () => {
    return(
        <>  
            <PageTitle
                NamePage="درباره ما"
            />
            <Philosophy/>
            <Email/>
            <Client/>
        </>
    )
}
    export default AboutPage;
    
