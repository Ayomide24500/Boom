import styled from "styled-components";
import Data from "../Display/data.json";
import App from "./Slider";
const Body = () => {
  // const data = Data
  return (
    <div>
      <Container>
        <Slide>
          <App />
        </Slide>
        <Cards>
          <One>
            {Data?.map((props) => (
              <div key={props?.id}>
                <ImageWrap>
                  <img src={props?.Img} alt="" />
                  <Cover>{props?.cover}</Cover>
                </ImageWrap>
                <Text>{props?.title}</Text>
              </div>
            ))}
          </One>
        </Cards>
      </Container>
    </div>
  );
};
export default Body;
const Cover = styled.div`
  height: 180px;
  width: 174px;
  background: white;
  top: 0px;
  /* z-index: 2; */
`;
const Text = styled.div`
  color: #fff;
  padding-left: 12px;
`;

const ImageWrap = styled.div`
  height: 180px;
  width: 174px;
  display: flex;
  flex-direction: column;
  /* background-color: #00000056; */
  border-radius: 10px;
  z-index: 1;

  Img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const One = styled.div`
  width: calc(100vw - 260px);
  height: 200px;
  /* background: aqua; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: -12px;
  gap: 9px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const Cards = styled.div`
  width: calc(100vw - 260px);
  height: 230%;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 7px;
  background: #1b1a1a;
  margin-left: 12px;
  margin-top: -1px;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 930%;
    position: relative;
    right: 30px;
  }
`;
const Slide = styled.div`
  width: calc(100vw - 260px);
  height: 450px;
  background: grey;
  position: relative;
  left: 12px;
  display: flex;
  flex-direction: rows;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const Container = styled.div`
  width: calc(100vw - 260px);
  height: 100vh;
  position: relative;
  left: 270px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;
