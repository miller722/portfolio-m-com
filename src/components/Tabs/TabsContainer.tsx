import { TabContainer, TabPanelContainer } from "./Tabs.style";
import { SocialNetworksListType, TabListType, socialNetworksList } from "../../data/tab-lists";
import TabList from "../TabList/TabList";

type TabsProps = {
    children: JSX.Element;
    tabLists: TabListType[];
    socialNetworksList: SocialNetworksListType[];
};

const TabsContainer = ({ children, tabLists }: TabsProps) => {
    return (
        <TabContainer>
            <TabList tabLists={tabLists} socialNetworksList={socialNetworksList} />
            <TabPanelContainer>{children}</TabPanelContainer>
        </TabContainer>
    );
};

export default TabsContainer;
