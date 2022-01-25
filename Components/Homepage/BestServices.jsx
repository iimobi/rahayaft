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
  height: 88vh;
  direction: rtl;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8rem;
@media only screen and (max-width: 1285px) {
  height: 110vh;
}
@media only screen and (max-width: 1150px) {
  column-gap: 5rem;
}
@media only screen and (max-width: 995px) {
  height: 160vh;
  flex-direction: column;
}
`;
const Text = styled.div`
  width: 40rem;
  height: 100%;
  display: grid;
  align-content: center;
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
    width: 40rem;
    line-height: 1.75rem;
  }
  p:nth-child(5) {
    width: 40rem;
    line-height: 1.75rem;
    margin: 1rem 0 2rem 0;
  }
  @media only screen and (max-width: 1285px) {
    width:35rem;
  }
  @media only screen and (max-width: 1150px) {
    width: 34rem;
    p:nth-child(4) {
      width: 34rem ;
    }
    p:nth-child(5) {
      width: 34rem;
    }
  }
  @media only screen and (max-width: 995px) {
    width: 44rem;
    height: 30rem !important;
    display: block;
    p:nth-child(4) {
      width: 44rem ;
    }
    p:nth-child(5) {
      width: 44rem;
      margin-bottom: 3rem;
    }
  }
  @media only screen and (max-width: 770px) {
    width: 35rem;
    p:nth-child(4) {
      width: 35rem ;
    }
    p:nth-child(5) {
      width: 35rem;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 92%;
    p:nth-child(4) {
      width: 100% ;
    }
    p:nth-child(5) {
      width: 100%;
    }
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
  @media only screen and (max-width: 995px) {
    width: 44rem;
    margin: 0;
  }
  @media only screen and (max-width: 600px) {
    width: 92%;
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
  @media only screen and (max-width: 1150px) {
      margin-left: 0.75rem;
  }
  @media only screen and (max-width: 995px) {
    margin-left: 4rem;
  }
  @media only screen and (max-width: 770px) {
    margin-left: 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-left: 20%;
  }
`;

const Rank = styled.div`
  display: grid;
  row-gap: 0.75rem;
  width: 26rem;
  margin-top: 6rem;
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: #e4e4e4;
    width: 100%;
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
  @media only screen and (max-width: 1285px) {
      width: 23rem;
  }
  @media only screen and (max-width: 1150px) {
      margin-top: 4rem;
      width: 20rem;
  }
  @media only screen and (max-width: 995px) {
    width: 43rem;
    margin-top: 0;
  }
  @media only screen and (max-width: 770px) {
    width: 35rem;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 92%;
    margin-top: 9rem;
  }
`;