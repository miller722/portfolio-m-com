import styled from "styled-components";
import { devices } from "../constans";

export const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 360px auto;
  z-index: 2;
  background-image: url('img/site-bar-bg.avif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media only screen and ${devices.sm} {
    display: flex;
    flex-direction: column;   
  }

`;
export const TabPanelContainer = styled.div`
  height: 100vh;
  width: 720px;
  background-color: #fff;
  @media only screen and ${devices.sm} {
    display: flex;
    flex-direction: column;   
    max-width: 440px;
    width: 100%
    
  }
`;

