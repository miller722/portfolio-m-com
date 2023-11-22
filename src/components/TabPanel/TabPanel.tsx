import { TabPanelContainer } from "./TabPanel.style";

type TabPanelProps = {
    title: string;
};

const TabPanel = ({ title }: TabPanelProps) => {
    return (
        <TabPanelContainer>
            <h1>{title}</h1>
        </TabPanelContainer>
    );
};

export default TabPanel;
