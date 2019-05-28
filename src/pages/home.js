import React, {Component} from "react";
import styled from "styled-components";
import { BigTitle } from "../components/titles";
import PreviewSection from "../components/previewSection";
import { StyledTabs, TabList, StyledTab, TabPanel } from "../components/tabs";

const PageWrapper = styled.div`
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(315deg, #C1C8E4, #84CEEB);
`;

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        //TO DO: get payloads from API instead of hardcode
        let payloads = [
            {
                "title": "Brief Introduction",
                "items": [
                    "Name: Anqi Huang",
                    "Phone: 226-***-****",
                    "Email: a45huang@gmail.com"
                ]
            },
            {
                "title": "Experience",
                "items": [
                    "Software Developer at XE.com"
                ]
            }
        ];
        return (
            <PageWrapper>
                <BigTitle style={{ "text-align": "center" }}>ANQI HUANG</BigTitle>
                <StyledTabs defaultIndex={1}>
                    <TabList>
                        <StyledTab>{payloads[0].title}</StyledTab>
                        <StyledTab>{payloads[1].title}</StyledTab>
                    </TabList>
                    <TabPanel>
                        <PreviewSection
                            title={payloads[0].title}
                            items={payloads[0].items}
                        />
                    </TabPanel>
                    <TabPanel>
                        <PreviewSection
                            title={payloads[1].title}
                            items={payloads[1].items}
                        />
                    </TabPanel> 
                </StyledTabs>
            </PageWrapper>
        );
    }
}

export default Home;
