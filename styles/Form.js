import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  width: 100%;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.7rem;
  }

  .searchContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    .inputContainer {
      display: flex;
      position: relative;
      
      .lastSearches {
        display: none;
        z-index: 89;
        position: absolute;
        margin-top: 4.2rem;
        list-style: none;
        margin-left: 2.0rem;
        width: 70vw;
        max-height: 180px;
        overflow-y: auto;
        min-width: 250px;
        font-size: 1.6rem;
        background-color: #ececec;

        &.show {
          display: block;
        }

        li {
          padding: 1.2rem;
          transition: 200ms;
          cursor: pointer;

          :hover {
            background-color: #3496eb55;
          }
        }
      }

      .inputField {
        display: flex;
        flex-direction: column;
        input {
          z-index: 90; 
          background-color: #eeee;
          color: #000;
          font-size: 1.8rem;
          font-weight: 600;
          outline: none;
          border: none;
          width: 70vw;
          min-width: 250px;
          margin: 0 0 0 2rem;
          padding: 0.8rem;
          padding-left: 1.2rem;
          transition: 500ms;
          border: 1px solid #ddd;

          ::-webkit-input-placeholder {
            color: #000;
            opacity: 0.8;
          }

          ::-moz-placeholder {
            color: #000;
            opacity: 0.8;
          }
        }
      }
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.2rem;
    padding: 0.8rem 2rem;
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
`;
