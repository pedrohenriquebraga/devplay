import styled from 'styled-components';

export const Container = styled.div`
    display: ${(p) => p.hidden ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #00000055;
`;
