import styled from "styled-components"

const AboutUs = () => { 
    return(
        <About>
            <Container>
                    <p>چکاری انجام می دهیم ؟</p>
                    <p><span>&#9900;</span><span></span></p>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
            </Container>
        </About>
    )
}

export default AboutUs ; 

const About = styled.div`
    width: 100% ;
    height: 100vh;
    background-image: url("/Computers.jpg");
    filter: brightness(45%);
    background-size: cover;
    direction: rtl ;
    display: grid;
    align-items: center;
    
`;
const Container = styled.div`
    width: 33rem;
    height: 78%;
    background-color: rgb(105, 105, 105);
    margin-right: 6%;
    border-radius: 0.25rem;
    padding: 3rem;
    color: white;
    p:nth-child(1){
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
    }
    p:nth-child(2){
        display: flex;
        width: 100%;
        align-items: center;
        span:nth-child(1){
            color:rgb(232, 68, 68) ;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 0 0.25rem 0.25rem;
            margin-bottom: 0.25rem;
        }
        span:nth-child(2){
            width: 3.5rem;
            height: 2px;
            background-color:rgb(232, 68, 68) ;
        }
    }
    p:nth-child(3){
        line-height: 1.5rem;
    }
`;
