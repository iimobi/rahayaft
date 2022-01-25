import styled from "styled-components";
import {IoIosArrowUp} from "react-icons/io"

const Terms = () => {
    const topFunction = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
      }
    return(
        <TermsLayout>
            <p>
                <span>raha</span>
                © 2017 All Right Reserved
            </p>
            <ul>
                <li>نقشه سایت</li>
                <li>شرایط و ضوابط</li>
                <li>سیاست حریم خصوصی</li>
            </ul>
            <button onClick={topFunction}><IoIosArrowUp/></button>
        </TermsLayout>
    )
};

export default Terms;

const TermsLayout = styled.div`
    width: 100%;
    height: 5rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    border-top: 1px solid rgb(141, 141, 141,0.25);
    column-gap: 10rem;
    p{
        color: white;
        
        span{
            color: rgb(232, 68, 68);
            margin-right: 0.25rem;
        }
    }
    ul{
        display: flex;
        column-gap: 3rem;
        color: white;
        li{
            cursor: pointer;
        }
        li:hover{
            transition: all 0.5s ease;
            color: rgb(232, 68, 68);
        }
    }
    button{
        position: absolute;
        width: 3rem;
        height: 3rem;
        border-radius: 2rem;
        border: 1px solid rgb(141, 141, 141,0.25);
        color: white;
        background-color: rgb(48, 48, 50);
        font-size: 1.5rem;
        text-align: center;
        bottom: 3.5rem;
        right: 1rem;
        cursor: pointer;
        transition: all 0.25s ease;
        :hover{
            border-color: rgb(232, 68, 68) ;
        }
        
    }
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        row-gap:1rem;
        justify-items: center;
        height: 7rem;
        flex-wrap: wrap;
        button{
            bottom:5.5rem ;
        }
    }
   
`;