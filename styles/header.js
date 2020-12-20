import styled from "styled-components";

export const HeaderMenu = styled.header`
  display: flex;
  align-items: center;
  background-image: linear-gradient(to left, #48c6ef 0%, #6f86d6 100%);
  /* background-image: linear-gradient(to left, #a3bded 0%, #6991c7 100%); */
  height: 8.0rem;
  padding-left: 2.8rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    font-size: 3.0rem;

    img {
      width: 100%;
      transform: rotate(30deg);
      filter: sepia(100%);
    }
  }
`;