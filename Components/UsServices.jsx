import styled from "styled-components";
import { BsBarChartLine } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
const UsServices = () => {
  return (
    <Services>
      <Text>
        <p>بهترین خدمات</p>
        <p>کارهایی که انجام میدهیم</p>
        <p>
          <span></span>
          <span>&#9900;</span>
          <span></span>
        </p>
      </Text>
      <BoxList>
        <div className="listItems">
          <p>استراتژی پروژه</p>
          <img src="/service-3.jpg" />
          <div>
            <FiDatabase />
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است سطرآنچنان که لازم است
          </p>
          <button>بیشتر بخوانید</button>
        </div>
        <div className="listItems">
          <p>ایده های کارشناسان</p>
          <img src="/service-2.jpg" />
          <div>
            <FaRegCommentDots />
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است سطرآنچنان که لازم است
          </p>
          <button>بیشتر بخوانید</button>
        </div>
        <div className="listItems">
          <p>مشاوره کسب و کار</p>
          <img src="/service-1.jpg" />
          <div>
            <BsBarChartLine />
          </div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است سطرآنچنان که لازم است
          </p>
          <button>بیشتر بخوانید</button>
        </div>
      </BoxList>
    </Services>
  );
};

export default UsServices;

const Services = styled.div`
  width: 100%;
  height: 145vh;
  display: grid;
  align-content: center;
  direction: rtl;
  row-gap: 2rem;
  @media only screen and (max-width: 990px) {
    height: auto;
    padding-top: 4rem;
  }
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
    margin-top: 5rem;
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
const BoxList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  padding-right: 0.2rem;
  .listItems {
    width: 22rem;
    height: 27rem ;
    border-radius: 0.25rem;
    display: grid;
    border: 1px solid #c5c5c5;
    justify-content: center;
    align-content: start;
    justify-items: center;
    p {
      width: 100%;
      height: 5rem;
      margin-top: 1.5rem;
      color: rgb(102, 102, 102);
      text-align: center;
      font-size: 0.9rem;
      line-height: 1.5rem;
      padding: 0.25rem;
    }
    p:nth-child(1) {
      height: 2rem;
      font-size: 1.2rem;
      color: black;
      font-weight: 500;
      margin: 0.5rem;
      padding: 0;
    }
    img {
      width: 100%;
    }
    :hover {
      img {
        filter: brightness(70%);
      }
    }
    button {
      width: 10rem;
      height: 3.2rem;
      border-radius: 2.5rem;
      border: none;
      color: white;
      background-color: rgb(48, 48, 50);
      font-size: 1rem;
      font-weight: bold;
      margin-top: 2rem;
    }
    button:hover {
      background-color: rgb(232, 68, 68);
    }
    div {
      width: 4rem;
      height: 4rem;
      padding: 0.75rem;
      z-index: 10;
      border-radius: 0.3rem;
      background-color: rgb(232, 68, 68);
      color: white;
      margin-top: -2rem;
      > * {
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
  @media only screen and (max-width: 1150px) {
      padding: 0 0.5rem 0 0.5rem;
      .listItems{
        width: 18rem;
        height: 25rem;
      }
  }
  @media only screen and (max-width: 990px) {
    flex-wrap: wrap;
    .listItems{
        width: 22rem;
        height: 27rem;
        margin-bottom: 4rem;
      }
  }
  @media only screen and (max-width: 780px) {
    .listItems{
          width: 18rem;
          height: 25rem;
      }
  }
  @media only screen and (max-width: 640px) {
    .listItems{
      width: 29rem;
      height: 32rem;
      margin-bottom: 4rem;
      button{
        margin-top: 3rem ;
      }
    }
  }
`;
