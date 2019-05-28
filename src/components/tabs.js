import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const StyledTab = styled(Tab)`
    // position: absolute;
    left: 0;
    display: block;
    background-color: #8860D0;
    color: #ffffff;
    width: 180px;
    height: 50px;
    list-style-type: none;
    font-size: 20px;
    font-weight: bold;
`;

const StyledTabs = styled(Tabs)`

`;

export {StyledTabs, TabList, StyledTab, TabPanel};