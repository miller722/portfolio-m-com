import styled from "styled-components";
import { devices } from "../constans";

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
  background: red;
  z-index: 2;
  background-image: url('img/site-bar-bg.avif');
  background-size: cover;
  @media only screen and ${devices.md} {
    display: flex;
    flex-direction: column;   
  }
`;
export const TabPanelContainer = styled.div`
  height: 100vh;
  width: 720px;
  background-color: #fff;
  @media only screen and ${devices["2xl"]} {
    background-color: #f6f6f6;
  }
`;

