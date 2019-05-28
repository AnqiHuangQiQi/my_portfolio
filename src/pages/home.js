import React, {Component} from "react";
import styled from "styled-components";
import { BigTitle } from "../components/titles";
import PreviewSection from "../components/previewSection";
import { Tabs, TabList, Tab, TabPanel } from "../components/tabs";

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
            }
        ];
        return (
            <PageWrapper>
                <BigTitle style={{ "text-align": "center" }}>ANQI HUANG</BigTitle>
                <Tabs>
                    <TabList>
                        <Tab>{payloads[0].title}</Tab>
                    </TabList>
                    <TabPanel>
                        <PreviewSection
                            title={payloads[0].title}
                            items={payloads[0].items}
                        />
                    </TabPanel> 
                </Tabs>
            </PageWrapper>
        );
    }
}

export default Home;
