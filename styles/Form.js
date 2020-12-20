import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3.0rem;
  width: 100%;

  h2 {
    font-size: 2.0rem;
    margin-bottom: 1.7rem;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 43px;
    padding: 0.8rem 2.0rem;
    font-size: 1.8rem;
    outline: none;
    background-color: #6684ff;
    color: #fff;
    border-radius: 0 12px 12px 0;
    border: 1px solid #5573ee;
    transition: 300ms;
    :hover {
      background-color: #118be4;
      border-radius: 0 8px 8px 0;
    }
  }

  input {
    background-color: #eee;
    color: #000;
    font-size: 1.8rem;
    font-weight: 600;
    outline: none;
    border: none;
    width: 70%;
    margin: 0 0 0 2.0rem;
    padding: 0.8rem;
    padding-left: 1.2rem;
    transition: 500ms;
    border-radius: 12px 0 0 12px;
    border: 1px solid #ddd;
    :focus {
      width: 60%;
      border-radius: 8px 0 0 8px;
    }

    ::-webkit-input-placeholder {
      color: #000;
      opacity: 0.8;
    }

    ::-moz-placeholder {
      color: #000;
      opacity: 0.8;
    }
  }
`;
