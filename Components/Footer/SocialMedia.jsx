import styled from "styled-components";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { FaTelegramPlane } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <MediaLayout>
      <img src="/logo-footer.png" alt="" />
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون   
      </p>
      <Media>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <IoLogoTwitter />
        </div>
        <div>
          <FaTelegramPlane />
        </div>
        <div>
          <ImLinkedin2 />
        </div>
      </Media>
    </MediaLayout>
  );
};

export default SocialMedia;

const MediaLayout = styled.div`
  display: grid;
  width: 22rem;
  height: 15rem;
  align-content: start;
  row-gap: 1.5rem;
  p {
    width: 100%;
    line-height: 1.75rem;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: 1170px) {
    width: 15rem;
  }
  @media only screen and (max-width: 775px) {
    width: 100%;
    justify-items: center;
    p{
      width: 80%;
      text-align: center;
    }  
  }
  `;

const Media = styled.div`
  display: flex;
  column-gap: 0.75rem;
  div {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 1.5rem;
    padding: 0.75rem 0 0.75rem 0;
    border: 1px solid white;
    margin-bottom: 2rem;
    :hover {
      border-color: rgb(232, 68, 68);
      cursor: pointer;
      transition: all 0.25s ease;
      }
  }
`;
