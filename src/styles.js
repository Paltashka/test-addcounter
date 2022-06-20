import styled, { css } from 'styled-components'
import {
    background,
    height,
} from 'styled-system'

export const Container = styled.div`
  ${background}
  ${height}
`

export const Box = styled.div`
  width: 80%;
  height: 70%;
  top: 15%;
  left: 10%;
  position: fixed;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  background: #FFFFFF;
  border: none;
  width: 160px;
  height: 60px;
  border-radius: 24px;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 1.2;
`;
export const Counter = styled.div`
  width: 160px;
  height: 71px;
  font-weight: 700;
  font-family: "Inter-Bold", "Inter", sans-serif;
  color: #8cd6bd;
  font-size: 64px;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: center;
`;
