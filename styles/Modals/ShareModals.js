import styled from "styled-components";

export const ShareBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 52rem;
    height: 22rem;
    padding: 1.8rem;  
    background-color: #fff;
    font-size: 1.6rem;
    border-radius: 5px;

    h2 {text-align: center; margin-bottom: -13px;}
    p {text-align: center}

    input {
        background: transparent;
        cursor: context-menu;
        outline: none;
        border: 3px dashed #ddd;
        padding: .8rem;
        ::selection {
            background-color: #6991c7;
            color: #fff;
        }
    }

    .ActionsButtons {
        display: flex;
        justify-content: flex-end;

        button {
            cursor: pointer;
            font-weight: 600;
            :last-child {
                margin-left: 1.0rem;
            }
            
            width: 10.0rem;
            padding: 1rem;
            transition: 200ms;
            background: transparent;
            border: none;
            border-radius: 5px;
            outline: none;
            svg {vertical-align: top; font-size: 1.7rem;}
            
            &#Accept {
                background: #6991c7;
                color: #fff;
                :hover {
                    background: #5881b6;
                    border-radius: 8px;
                }
            }

            &#Recuse {
                border: 1px solid #ff3341;
                :hover {
                    color: #fff;
                    background: #ff3341;
                    border-radius: 8px;
                }
            }
        }
    }
`