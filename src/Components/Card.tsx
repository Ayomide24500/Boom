import { FC } from "react";
import { IconType } from "react-icons/lib";
import styled from "styled-components";

// import {AiFillStar} from "react-icons/ai"

interface iprops {
  imge?: string | undefined;
  title?: string;
  icon?: IconType;
  cover: string;
}
const CardTwo: FC<iprops> = ({ imge, title, cover }) => {
  return (
    <div>
      <Container>
        <ImageWrap>
          <img src={imge} alt="" />
          <Cover>{cover}</Cover>
        </ImageWrap>
      </Container>
    </div>
  );
};

export default CardTwo;
// const Image = styled.img`
//     height: 190px;
//     width: 180px;
// `
const Cover = styled.div`
  height: 190px;
  width: 180px;
  background: black;
  top: 0px;
  z-index: -1;
`;
const ImageWrap = styled.div`
  height: 176px;
  width: 180px;
  display: flex;
  flex-direction: column;
  /* background-color: #00000056; */
  border-radius: 10px;
  Img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Container = styled.div`
  width: calc(100vw - 260px);
  height: 220%;
  display: flex;
  /* background: #fff; */
  margin: 20px 10px 10px 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.443); */
  /* transition: ; */
  /* &:hover{
    box-shadow: 0 2px 6px 2px rgba(0, 0, 0, 0.4);
    } */
`;
