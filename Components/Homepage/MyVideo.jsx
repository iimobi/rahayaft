import { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const MyVideo = () => {
  const [play, setplay] = useState(false);
  return (
    <Video>
      <p>لورم ایپسوم تولید متن ساختگی است</p>
      <div>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی است</p>
        <AiOutlinePlayCircle onClick={() => setplay(true)} className="icon" />
      </div>
      <div className={`play ${play ? "active" : ""}`}>
        <IoCloseSharp onClick={() => setplay(false)} className="closeIcon" />
        <video controls></video>
      </div>
    </Video>
  );
};

export default MyVideo;

const Video = styled.div`
  width: 100%;
  height: auto;
  background-image: url("/promo-video.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  padding: 5.5rem 0 6rem 10rem;
  padding-left: 10rem;
  color: white;
  display: grid;
  align-content: center;
  align-items: center;
  p {
    width: 28rem;
    line-height: 5rem;
    font-size: 3rem;
    font-weight: bold;
    text-align: right;
  }
  div {
    width: 17rem;
    display: flex;
    justify-content: right;
    margin: 0.5rem 0 0 11rem;
    .icon {
      width: 6rem;
      height: 6rem;
      cursor: pointer;
    }
    p {
      width: 12rem;
      height: 3rem;
      margin-top: 2rem;
      margin: 1.5rem 1rem 0 0;
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  .play {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(255, 255, 255, 0.75);
    z-index: 999;
    display: none;
    flex-direction: column;
    direction: rtl;
    padding-top: 0.5rem;
    transition: all 0.25s ease;
    margin: 0;
    opacity: 0;
    .closeIcon {
      width: 1.25rem;
      height: 1.25rem;
      font-weight: bold;
      color: black;
      cursor: pointer;
      margin: 0 15% 0.5rem 15%;
    }
    video {
      width: 70%;
      height: 90%;
      box-shadow: 2px 2px 10px 4px #69696933;
      margin: 0 15% 0 15%;
    }
  }
  .active {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    margin: 0;
    opacity: 1;
    transition: all 5s ease;
  }
  
  @media only screen and (max-width: 1100px) {
    padding-left: 3rem;
  }
  @media only screen and (max-width: 700px) {
    padding-left: 1rem;
    .play {
      padding-top: 2rem;
      .closeIcon {
        margin: 0;
      }
      video {
        width: 100%;
        height: 80%;
        margin: 0;
      }
    }
  }
`;
