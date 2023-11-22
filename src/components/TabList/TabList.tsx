import { TabListType, SocialNetworksListType } from "../../data/tab-lists";
import { TabListContainer, StyledNavLink, SideBar, PersonAvatar, SocialNetworkWrapper, MyImg, StyledSocialLink, SocialNetworkInner } from "./TabList.style";

type TabListProps = {
    tabLists: TabListType[];
    socialNetworksList: SocialNetworksListType[];
};

const TabList = ({ tabLists, socialNetworksList }: TabListProps) => {
    return (
        <SideBar>
            <PersonAvatar>
                <img src="img/avatar.jpg" className="avatar" alt="avatar" />
                <h1 className="person-title">Mykhailo Komnatskyi
                </h1>
                <h2 className="person-info">Junior Frontend Developer
                </h2>
            </PersonAvatar>
            <TabListContainer>
                {tabLists.map((item) => (
                    <StyledNavLink key={item.tabKey} to={item.tabKey}>
                        {item.title}
                    </StyledNavLink>
                ))}
            </TabListContainer>
            <SocialNetworkWrapper>
                <SocialNetworkInner>
                    <h2 className="text--size-medium text--color-black">GET IN TOUCH</h2>
                    {socialNetworksList.map((item) => (
                        <StyledSocialLink key={item.name} to={item.path}>
                            <MyImg src={`/img/${item.src}`} />
                        </StyledSocialLink>
                    ))}
                </SocialNetworkInner>
            </SocialNetworkWrapper>
        </SideBar>
    );
};

export default TabList;