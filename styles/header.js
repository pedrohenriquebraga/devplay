import styled from "styled-components";

export const HeaderMenu = styled.header`
  display: flex;
  align-items: center;
  background-color: #5159f5;
  height: 80px;
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bolder;
    font-size: 30px;
    padding-left: 28px;
  }

  form {
    width: 100%;
    button {
      padding: 8px 20px;
      font-size: 18px;
      border: none;
      outline: none;
      background-color: #6684FF;
      color: #fff;;
      border-radius: 0 12px 12px 0;
      transition: 300ms;
      :hover {
        background-color: #229cf5;
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;

export const SearchInput = styled.input`
  background-color: #383da8;
  color: #fff;
  font-size: 18px;
  outline: none;
  border: none;
  width: 70%;
  margin: 0 0 0 20px;
  padding: 8px;
  padding-left: 12px;
  transition: 500ms;
  border-radius: 12px 0 0 12px;
  :focus {
    width: 60%;
    border-radius: 8px 0 0 8px;
  }

  ::-webkit-input-placeholder {
    color: #fff;
    opacity: 0.8;
  }

  ::-moz-placeholder {
    color: #fff;
    opacity: 0.8;
  }
`;
