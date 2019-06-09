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
    border-bottom: 5px solid #A98DDD;
    border-radius: 0px 15px 15px 0px;
    &.is-selected {
        background-color: #C1C8E4;
        color: #ffffff
        border-bottom: 5px solid #A5ABC2;
        border-radius: 0px 10px 10px 0px
        :after {
            content: "";
            background-color: #C1C8E4;
            // border-bottom: 5px solid #A5ABC2;
            height: 50px;
            width: 30px;
            position: absolute;
            left: 180px;
            border-radius: 0px 30px 30px 0px;
        }
    }
`;

const StyledTabList = styled(TabList)`
    padding-left: 0;
`;

const StyledTabs = styled(Tabs)`
    margin-top: 50px;
`;

const StyledTabPanel = styled(TabPanel)`
    margin-left: 200px;
    margin-top: -120px;

    width: 70%;
    height: 70%;
    border: 5px solid #5AB9EA;
    display: none;

    &.is-selected {
        display: block;
        
    }
`;

export {StyledTabs, StyledTabList, StyledTab, StyledTabPanel};