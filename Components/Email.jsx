import styled from "styled-components";

const Email = () => {
  return (
    <EmailLayout>
      <div className="bgcolor">
            <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده
            </p>
            <button>ایمیل بزنید</button>
      </div>
    </EmailLayout>
  );
};

export default Email;

const EmailLayout = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url("/cta.jpg");
  background-repeat:no-repeat;
  background-size:cover;
  position: relative;
  direction : rtl;
  
  .bgcolor {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgb(232, 68, 68,0.6);
    display : flex ;
    align-items : center;
    justify-content: space-around;
  }
  p{
      color : white;
      font-weight : bold;
      font-size : 1.5rem;
      line-height : 2.5rem;
      width : 35rem;
      height : 50%;
  }
  button{
    border : none;
    width : 12rem ;
    height : 3.5rem;
    font-size: 1.5rem;
    border-radius : 1.75rem;
    cursor: pointer;
    :hover {
      color : white;
      background-color: transparent;
      border: 2px solid white;
    }
  }
  @media only screen and (max-width: 800px) {
      height : 30vh;
      background-position:center center;
     
      .bgcolor{
        flex-direction: column;
      }
      p{
        text-align : center;
      }
  };
  @media only screen and (max-width: 600px) {
      p{
        width: 30rem;
      }
  };
`;
