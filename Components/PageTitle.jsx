import styled from "styled-components";



const PageTitle = ({NamePage}) => {
    return(
        <TitlePage>
            <div>
                <h1>{NamePage}</h1>
                <ol>
                    <li><a>خانه</a></li>
                    <li>{NamePage}</li>
                </ol>
            </div>
        </TitlePage>
    )
}

export default PageTitle ;


const TitlePage = styled.div`
    width: 100%;
    height: 23rem;
    background-color: red;
    background-image: url("/page-title.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative;
    text-align: center;
    display: grid;
    align-items: center;
    ::before{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: #000;
        opacity: 0.6;
    }
    div{
        width: 100%;
        color: white;
        display: grid;
        justify-content: center;
        position: absolute;
        row-gap: 3rem;
        ol{
            display: grid;
            grid-auto-flow: column;
            font-weight: bold;
            column-gap: 1rem;
            font-size: 0.9rem;
            li:nth-child(1){
                cursor: pointer;
            }
            li:nth-child(2){
                ::before{
                    content: "/";
                    margin-right: 1rem;
                }
            }
        }
    }
`;