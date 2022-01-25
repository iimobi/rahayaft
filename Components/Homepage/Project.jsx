import styled from "styled-components";
import {FiSearch} from "react-icons/fi";

const Project = () => {
    return(
        <ProjectLayout>
            <Text>
                <p>کارهای دیگر</p>
                <p>پروژه های قبلی</p>
                <p>
                    <span></span>
                    <span>&#9900;</span>
                    <span></span>
                </p>
            </Text>
            <LastPro>
                <div>
                    <img src="/work-4.jpg"/>
                    <FiSearch className="icon"/>
                    <p>سزیسز نزنس نونوزن م</p>
                    <div>ثیثت نبئر</div>
                </div>
                <div>
                    <img src="/work-3.jpg"/>
                    <FiSearch className="icon"/>
                    <p>سئطت نخسزن نهئزن نن</p>
                    <div>ثیثت نبئر</div>
                </div>
                <div>
                    <img src="/work-2.jpg"/> 
                    <FiSearch className="icon"/>
                    <p>ئس نخ نزئ زخنس</p>
                    <div>ثیثت نبئر</div>
                </div>
                <div>
                    <img src="/work-1.jpg"/>
                    <FiSearch className="icon"/>
                    <p>سخنز ینئن هنسئیزنئهنئه ن</p>
                    <div>ثیثت نبئر</div>
                </div>
            </LastPro>
        </ProjectLayout>
    )
};

export default Project;

const ProjectLayout = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    align-content: center;
    direction: rtl;
    row-gap: 2rem;
    padding: 5rem 0;
    background-color: rgb(245, 245, 245);

`;

const Text = styled.div`
    display: grid;
    align-content: start;
    p {
        text-align: center;
    }
    p:nth-child(1) {
        font-size: 1rem;
        color: rgb(102, 102, 102);
        font-weight: bold;

    }
    p:nth-child(2) {
        font-size: 2rem;
        font-weight: bold;
        margin: 1rem 0 0.5rem 0;
    }
    p:nth-child(3) {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        span:nth-child(odd) {
        width: 3.5rem;
        height: 2px;
        background-color: rgb(232, 68, 68);
        }
        span:nth-child(2) {
        color: rgb(232, 68, 68);
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 0.25rem 0.4rem 0.25rem;
        }
    }  
`;

const LastPro = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-content: center;
    div{
        background-color: red;
        width: 23.6rem;
        position: relative;
        display: grid;
        justify-items: center;
        :hover{
            img{
                filter: brightness(25%);
                transition: all 0.25s ease;
            }
            .icon{
                display: block;
            }
            > * {
                display: block;
            }
        }
    > * {
        color: white;
        background-color: transparent;
    }
        p{
            position: absolute;
            bottom: 4.5rem;
            right: 2rem;
            font-size: 1.25rem;
            display: none;
            font-weight: bold;
            cursor: pointer;
            :hover{
            color: rgb(232, 68, 68);
            transition: all 0.25s ease;
        }
        }
        div{
            position: absolute;
            bottom: 2.5rem;
            right: 2rem;
            font-size: 1rem;
            cursor: default;
            display: none;
      
        }
        .icon{
            position: absolute;
            top: 11rem;
            width: 2rem;
            height: 2rem;
            display: none;
            cursor: pointer;
            :hover{
                width: 2.5rem;
                height: 2.5rem;
                transition: all 0.25s ease;
            }
        }
    }
   
  
`;