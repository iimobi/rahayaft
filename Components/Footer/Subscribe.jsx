import styled from "styled-components";
import {HiOutlineArrowLeft} from "react-icons/hi";
const Subscribe = () => {
  return (
    <Sub>
      <h3>مارا دنبال کنید</h3>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
      </p>
      <form action="#">
          <input type="text" placeholder="ایمیل خود را وارد کنید" />
          <button type="submit"><HiOutlineArrowLeft/></button>
      </form>
      
    </Sub>
  );
};

export default Subscribe;

const Sub = styled.div`
  display: grid;
  width: 20rem;
  height: 15rem;
  align-content: start;
  row-gap: 1rem;
  padding: 1rem 0 1rem 0;
 
  p:nth-child(2){
    line-height: 1.75rem;
    font-size: 0.9rem;
    width: 14rem;
  }
  form{
  position: relative ;
  input{
  width: 15rem;
  height: 3.2rem;
  border-radius: 2.5rem;
  border: none;
  font-size: 1rem;
  padding-right: 1rem;
  font-weight: bold;
  :focus{
    outline: none;
  }
}
button{
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  position: absolute;
  top: 0.4rem;
  left: 5.5rem;
  border-radius: 1.5rem;
  font-size: 1.25rem;
  padding-top: 0.2rem;
  background-color: rgb(232, 68, 68);
  color: white;
  
  cursor: pointer;
  :hover{
    transition: all 0.5s ease;
    padding-right: 1rem;

  }
}
  }
  @media only screen and (max-width: 1170px) {
    width: 18rem;
   button{
     left : 3.5rem !important;
   }
  }
  @media only screen and (max-width: 1000px) {
    width: 40rem;
    height:12rem;
    margin-top: 2rem;
    p:nth-child(2){
      width: 100%;
    }
    input{
      width: 40rem !important;
    }
    button{
     left : 0.5rem !important;
   }
  }
  @media only screen and (max-width: 775px){
      justify-items: center;
      margin-bottom: 5rem;
      p:nth-child(2){
        text-align: center;
      }
      input{
        width: 30rem !important;
      }
  }
  @media only screen and (max-width: 520px){
      width: 100%;
      input{
        width: 100% !important;
      }
    }
`;
