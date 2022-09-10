import styled from "styled-components";

const Container = styled.div`
  background-color: #eae3d2;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  margin: auto 60px;
  min-height: 550px;
  padding: 25px 0;
  width: 100%;
  @media (max-width: 960px) {
    margin: auto 40px;
  }
`;

export default Container;
