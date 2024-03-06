import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../constans";
interface TabListContainerProps {
  openDrawer: boolean;
}
export const SideBar = styled.aside`
display: flex;
flex-direction: column;
background-color: rgba(139, 69, 19, 0.8);
@media only screen and ${devices.sm} {
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10px;
  height: 50px;
}
@media only screen and ${devices.xs} {
  padding: 10px;
  height: 40px;
}
`;
export const Person = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
gap: 10px; 
margin-top: 30px;
@media only screen and ${devices.xl} {
  margin-top: 10px;
}
@media only screen and ${devices.sm} {
  flex-direction: row;
  margin-top: 0;
}
`;

export const TabListContainer = styled.div<TabListContainerProps>`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 35px;
@media only screen and ${devices.xl} {
  margin-top: 15px;
}

@media only screen and ${devices.sm} {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  background-image: url('img/site-bar-bg.avif');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-direction: column;

  background-color: white;
  padding: 20px 20px 200px 20px;

  transition: 0.2s ease-out;

  transform: translateX(100%);
  margin-top: 1px;
  transform: ${({ openDrawer }) =>
    openDrawer ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;

}

`;

export const StyledNavLink = styled(NavLink)`
  font-weight: 500;
  color: black;
  text-decoration: none;
  z-index: 2;
  font-family: Oswald;
  font-size: 24px;
  &.hover {
    color: gray;
  }
  &.active {
    color: hsl(204 20% 100%);
  }
  @media only screen and ${devices.xl} {
    font-size: 20px;
  }
  @media only screen and ${devices.sm} {
    font-size: 18px;
    &.active {
      color: blue;
    }
  }
`;


export const StyledSocialLink = styled(NavLink)`
`;

export const SocialNetworkWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 100px;
@media only screen and ${devices.xl} {
  font-size: 22px;
  margin-top: 70px;
}
@media only screen and ${devices.sm} {
  font-size: 18px;
  margin-top: 10px;
}
`;

export const SocialNetworkInner = styled.div`
 text-align: center;
 gap: 20px;
 @media only screen and ${devices.sm} {
}
`;

export const MyImg = styled.img`
padding: 5px;
`;


export const HamburgerButton = {
  Wrapper: styled.button`
    display: none;
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    font-size: 12px;


    @media only screen and (max-width: 40em) {
      display: block;
      position: absolute;
      top: 3.5%;
      right: 7%
    }
    @media only screen and (max-width: 25em) {
      display: block;
      position: absolute;
      top: 2.5%;
      right: 10%
    }



    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;

    &,
    &:after,
    &:before {
      /* Create lines */
      height: 2px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: black;
      position: absolute;
    }

    &:after {
      /* Move bottom line below center line */
      top: -0.6rem;
    }

    &:before {
      /* Move top line on top of center line */
      top: 0.6rem;
    }
  `
};