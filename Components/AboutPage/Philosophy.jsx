import styled from "styled-components";

const Philosophy = () => {
  return (
    <Phil>
      <div className="philosophyTxt">
        <p>درباره ما بدانید</p>
        <p>تاریخچه ما</p>
        <p>
          <span>&#9900;</span>
          <span></span>
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد 
        </p>
        <button>بیشتر بدانید</button>
      </div>
      <img src="philosophy.jpg" alt="" />
    </Phil>
  );
};

export default Philosophy;

const Phil = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88vh;
  direction: rtl;
  column-gap: 2rem;
  .philosophyTxt {
    width: 40rem;
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
      color: gray;
    }
    p:nth-child(5) {
      width: 40rem;
      line-height: 1.75rem;
      margin: 1rem 0 1rem 0;
      color: gray;
    }
    button{
    width: 11rem;
    height: 3.25rem;
    background-color: rgb(232, 68, 68);
    border: none;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    :hover {
    background-color: rgb(238, 113, 113);
  }
  }
  }
  img {
    width: 28rem;
    height: 20rem;
  }
  @media only screen and (max-width : 1180px){
    .philosophyTxt{
        width: 30rem;
       p{
           width: 100% !important;
       }
    }
    img{
        width: 22rem;
        height: 18rem;
    }
  }
  @media only screen and (max-width : 920px){
        flex-direction: column-reverse;
        height: auto;
        padding: 5rem 0;
        row-gap: 4rem;
        .philosophyTxt{
          width: 40rem;
        }
        img{
            width: 40rem;
            height: 30rem;
        }
  @media only screen and (max-width : 765px){
   
    .philosophyTxt{
        width: 90%;
    }
    img{
        width: 90%;
        height: 20%;
    }
  }
  }
`;
