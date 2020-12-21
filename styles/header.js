import styled, { keyframes } from "styled-components";

const ShakeLogo = keyframes`
  0% {
    transform: rotate(0deg)
  }

  50% {
    transform: rotate(5deg)
  }

  75% {
    transform: rotate(-5deg)
  }

  100% {
    transform: rotate(0deg)
  }
`

export const HeaderMenu = styled.header`
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to left, #48c6ef 0%, #6f86d6 100%);
  /* background-image: linear-gradient(to left, #a3bded 0%, #6991c7 100%); */
  height: 8.0rem;
  padding-left: 2.8rem;
  margin-bottom: 1.7rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    font-size: 3.0rem;
    animation: ${ShakeLogo} 10s infinite ease-in-out;
  }
`;