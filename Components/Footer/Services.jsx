import styled from "styled-components";

const Services = () => {
    return(
        <ServiceLayout>
        <div className="section-Service">
            <h3>خدمات</h3>
            <ul>
                <li>
                    <a href="#">درباره ما</a>
                </li>
                <li>
                    <a href="#">خدمات</a>
                </li>
                <li>
                    <a href="#">تماس با ما</a>
                </li>
            </ul>
        </div>
        <div className="section-Service">
        <h3>دسترسی سریع</h3>
        <ul>
            <li>
                <a href="#">درباره ما</a>
            </li>
            <li>
                <a href="#">خدمات</a>
            </li>
            <li>
                <a href="#">تماس با ما</a>
            </li>
        </ul>
    </div>
    </ServiceLayout>
    )
};

export default Services;


const ServiceLayout = styled.div`
    display: flex;
    height: 15rem;

    .section-Service{
        display: grid;
        width: 14rem;
        height: 70% !important;
        padding: 1rem 0 1rem 0;
        row-gap: 2rem;
    h3{
        width: 60%;
        font-size:1.3rem;
    }
    ul{
      display: grid;
      row-gap: 1.5rem;
    }
    ul li {
        cursor: pointer;
    }
    ul li::before { 
        content: "›";
        margin-left: 1rem;
        font-size:1.75rem;
    }
    a:hover{
        color: rgb(232, 68, 68);
        text-decoration: underline solid rgb(232, 68, 68) 1px;
        transition: all 0.25s ease;
    }
}
    @media only screen and  (max-width: 775px){
        align-items: center;
        justify-items: center;
        margin-top: 1rem;
        .section-Service{
            justify-content: center; 
            h3{
            width: 100%;
          
        }
        }
       
    }
`;