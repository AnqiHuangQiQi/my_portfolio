import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const StyledTab = styled(Tab)`
    background-color: #8860D0;
    color: #C1C8E4;
    width: 180px;
    height: 50px;
    list-style-type: none;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border-bottom: 3px solid #A98DDD;
    border-radius: 0px 50px 50px 0px;
    border-bottom-length: 80%;
`;

const StyledTabList = styled(TabList)`
    padding-left: 0;
`;

const StyledTabs = styled(Tabs)`
    left: 180px;
`;

const StyledTabPanel = styled(TabPanel)`
    left: 180px;
`;

export {StyledTabs, StyledTabList, StyledTab, StyledTabPanel};