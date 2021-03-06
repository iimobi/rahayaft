import styled from "styled-components";

const AboutUs = () => {
  return (
    <About>
      <Container>
        <p>درباره ما بیشتر بدانید</p>
        <p>
          <span>&#9900;</span>
          <span></span>
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <Items>
          <img src="/Arrow.svg" /> <p>نمومه کار</p>
          <img src="/Arrow.svg" /> <p>حسابرسی</p>
          <img src="/Arrow.svg" /> <p>نماد الکترونیک</p>
          <img src="/Arrow.svg" /> <p>سلام</p>
          <img src="/Arrow.svg" /> <p>سفارش</p>
          <img src="/Arrow.svg" /> <p>کنترل</p>
        </Items>
        <button>بیشتر بدانید</button>
      </Container>
    </About>
  );
};

export default AboutUs;

const About = styled.div`
  width: 100%;
  height: auto;
  background-image: url("/Computers.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  direction: rtl;
  display: grid;
  align-items: center;
  @media only screen and (max-width: 990px) {
    justify-content: center;
  }
`;
const Container = styled.div`
  width: 33rem;
  height: auto;
  background-color: rgb(48, 48, 50);
  margin: 5rem 12%  5rem 0;
  margin-right: 12%;
  border-radius: 0.25rem;
  padding: 3rem;
  color: #d3d2d2;

  button {
    width: 11rem;
    height: 3.25rem;
    background-color: rgb(232, 68, 68);
    border: none;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
  }
  button:hover {
    background-color: rgb(238, 113, 113);
  }
  p:nth-child(1) {
    font-size: 1.5rem;
    margin-bottom: 0.25rem;
  }
  p:nth-child(2) {
    display: flex;
    width: 100%;
    align-items: center;
    span:nth-child(1) {
      color: rgb(232, 68, 68);
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0 0.25rem 0.25rem;
    }
    span:nth-child(2) {
      width: 3.5rem;
      height: 2px;
      background-color: rgb(232, 68, 68);
    }
  }
  p:nth-child(3) {
    line-height: 1.5rem;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 1200px) {
      margin-right: 5%;
      width: 29rem;
  }
  @media only screen and (max-width: 990px) {
    margin-right: 0;
    width: 45rem ;
  }
  @media only screen and (max-width: 770px) {
    width: 33rem;
    margin-right: 0;
  }
  @media only screen and (max-width: 575px) {
    width: 29rem;
  }
`;
const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 1fr 0.5fr;
  grid-template-rows: 0.1fr 0.1fr 0.1fr;
  gap: 0.75rem;
  margin: 3rem auto 9% auto;
  p {
    width: 12rem;
   
  }
  img {
    width: 1.1rem;
    height: 1.1rem;
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1rem 1fr;
    grid-template-rows: auto;
    row-gap: 0.75rem;
  }
  @media only screen and (max-width: 990px) {
    grid-template-columns: 1rem 10rem 1rem 10rem;
    grid-template-rows: 0.1fr 0.1fr 0.1fr;
  }
`;
