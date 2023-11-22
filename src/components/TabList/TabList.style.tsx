import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = styled.aside`
display: flex;
flex-direction: column;
background-color: rgba(139, 69, 19, 0.8);
`;

export const PersonAvatar = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px; 
margin-top: 30px;
`;

export const TabListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 35px;
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  color: black;
  text-decoration: none;
  z-index: 2;
  font-family: Oswald;
  font-size: 24px;
`;


export const StyledSocialLink = styled(NavLink)`
`;

export const SocialNetworkWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 70px;
`;

export const SocialNetworkInner = styled.div`
 text-align: center;
 gap: 20px;
`;

export const MyImg = styled.img`
padding: 5px;
`;
