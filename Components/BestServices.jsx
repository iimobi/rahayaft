import styled from "styled-components";
import { FiDatabase } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const BestServices = () => {
  return (
    <Service>
      <Text>
        <p>بهترین خدمات</p>
        <p>چرا باید مارا انتخاب کنید</p>
        <p>
          <span>&#9900;</span>
          <span></span>
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان  
        </p>
        <Performance>
          <TextIcon>
            <div className="icon">
              <FiDatabase />
            </div>
            <div>
              <span>210</span>
              <br />
              <div>پروژه های انجام شده</div>
            </div>
          </TextIcon>
          <TextIcon>
            <div className="icon">
              <BsEmojiSmile />
            </div>
            <div>
              <span>585</span>
              <br />
              <div>رضایت مشتریان</div>
            </div>
          </TextIcon>
          <TextIcon>
            <div className="icon">
              <AiOutlineLike />
            </div>
            <div>
              <span>520</span>
              <br />
              <div>پروژه های موفق</div>
            </div>
          </TextIcon>
        </Performance>
      </Text>
      <Rank>
        <div>نام</div>
        <input value="10" type="range" />
        <div>مشاوره</div>
        <input value="92" type="range" />
        <div>کار و کسب</div>
        <input value="60" type="range" />
        <div>شهرت</div>
        <input value="80" type="range" />
      </Rank>
    </Service>
  );
};

export default BestServices;

const Service = styled.div`
  width: 100%;
  height: 108vh;
  direction: rtl;
  display: flex;
  align-items: center;
  padding: 8% 6% 8% 0;
@media only screen and (max-width: 1278px) {
  height: 125vh;
}
@media only screen and (max-width: 985px) {
  height: 200vh;
  flex-direction: column;
  padding: 0;
}
@media only screen and (max-width: 600px) {
  height: 215vh;
}
`;
const Text = styled.div`
  width: 60%;
  height: 100%;
  align-content: start;
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
    align-items: center;
    margin-bottom: 0.75rem;
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
  p:nth-child(4) {
    line-height: 1.5rem;
  }
  p:nth-child(5) {
    width: 100%;
    line-height: 1.5rem;
    margin: 1rem 0 3rem 0;
  }
  @media only screen and (max-width: 1200px) {
    width:45%;
    p:nth-child(4) {
      width: 90%;
  }
    p:nth-child(5){
      width: 90%;
    }
}
@media only screen and (max-width: 1200px) {
    width:65%;
}
@media only screen and (max-width: 985px){
  width: 100% ;
  padding: 9% 12% 0 6% ;
  align-items: center;
}
@media only screen and (max-width: 700px){
  padding-right: 5%;
}
`;

const Performance = styled.div`
  display: flex;
  .icon {
    width: 4.5rem;
    height: 4.5rem;
    font-size: 1.75rem;
    border: 1px solid #cecece;
    border-radius: 2.5rem;
    padding: 1.25rem;
    color: rgb(232, 68, 68);
    margin-left: 0.75rem;
    
  }
  @media only screen and (max-width: 985px) {
    width: 100%;
    margin: 0;
  }
`;

const TextIcon = styled.div`
  display: flex;
  align-content: center;
  font-weight: bold;
  margin-left: 2rem;
  div:nth-child(2) {
    width: 6.5rem;
    font-size: 0.75rem;
    color: #949494;
    div{
      margin-top: 0.75rem;
    }
    span {
      color: black;
      width: 7rem;
      font-size: 2.5rem;
     }
  }
  @media only screen and (max-width: 1100px) {
      margin-left: 1rem;
  }
  @media only screen and (max-width: 630px) {
    flex-direction: column;
    margin-left: 5rem;
  }
`;

const Rank = styled.div`
  display: grid;
  row-gap: 0.5rem;
  padding: 8% 8% 0 0;
  width: 45%;
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: #e4e4e4;
    width: 85%;
    border-radius: 1rem;
    height: 1.1rem;
    margin-bottom: 1.5rem;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: gray;
  }
  @media only screen and (max-width: 1200px) {
      padding: 7% 0 0 0 ; 
  }
  @media only screen and (max-width: 985px) {
      width: 100%;
      padding: 3rem 7rem 10rem 0;
      input[type="range"]{
        width: 38rem ;
      }
  }
  @media only screen and (max-width: 800px) {
      padding-right: 6rem;
      input[type="range"]{
        width: 34rem ;
      }
  }
  @media only screen and (max-width: 700px) {
      padding-right: 3.5rem;
  }
  @media only screen and (max-width: 630px) {
      padding-right: 1.5rem;
      input[type="range"]{
        width: 27.5rem ;
      }
  }
`;