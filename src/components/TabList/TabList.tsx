import { useEffect, useRef, useState } from "react";
import { TabListType, SocialNetworksListType } from "../../data/data-lists";
import {
    TabListContainer,
    StyledNavLink,
    SideBar,
    Person,
    SocialNetworkWrapper,
    MyImg,
    StyledSocialLink,
    SocialNetworkInner,
    HamburgerButton,
} from "./TabList.style";

type TabListProps = {
    tabLists: TabListType[];
    socialNetworksList: SocialNetworksListType[];
};

const TabList = ({ tabLists, socialNetworksList }: TabListProps) => {
    const [openDrawer, toggleDrawer] = useState(false);
    const drawerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        /* Close the drawer when the user clicks outside of it */
        const closeDrawer = (event: MouseEvent) => {
            if (
                drawerRef.current &&
                drawerRef.current.contains(event.target as Node)
            ) {
                return;
            }

            toggleDrawer(false);
        };

        document.addEventListener("mousedown", closeDrawer);
        return () => document.removeEventListener("mousedown", closeDrawer);
    }, []);
    return (
        <SideBar>
            <Person>
                <img src="img/avatar.jpg" className="avatar" alt="avatar" />
                <div className="person__inner">
                    <h1 className="person__title ">Mykhailo Komnatskyi</h1>
                    <h2 className="person-info">Junior Frontend Developer</h2>
                </div>
            </Person>

            <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
                <HamburgerButton.Lines />
            </HamburgerButton.Wrapper>
            <TabListContainer ref={drawerRef} openDrawer={openDrawer}>
                {tabLists.map((item) => (
                    <StyledNavLink key={item.tabKey} to={item.tabKey} onClick={() => toggleDrawer(false)} >
                        {item.title}
                    </StyledNavLink>
                ))}

                <SocialNetworkWrapper>
                    <SocialNetworkInner>
                        <h2 className="text--size-medium text--color-black">
                            GET IN TOUCH
                        </h2>
                        {socialNetworksList.map((item) => (
                            <StyledSocialLink key={item.name} to={item.path}>
                                <MyImg src={`/img/${item.src}`} />
                            </StyledSocialLink>
                        ))}
                    </SocialNetworkInner>
                </SocialNetworkWrapper>
            </TabListContainer>
        </SideBar>
    );
};

export default TabList;
