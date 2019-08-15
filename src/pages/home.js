import React, {Component} from "react";
import styled from "styled-components";
import { BigTitle } from "../components/titles";
import PreviewSection from "../components/previewSection";
import { StyledTabs, StyledTabList, StyledTab, StyledTabPanel } from "../components/tabs";

import "../css/tabs.css";

const PageWrapper = styled.div`
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-220deg, #5AB9EA, #5680E9 65%, #5AB9EA 15%);
`;

class Home extends Component {
    constructor (props) {
        super(props);
    }
    render() {
        //TO DO: get payloads from API instead of hardcode
        let payloads = [
            {
                "title": "About Me",
                "items": [
                    "Name: Anqi Huang",
                    "Phone: 226-***-****",
                    "Email: a45huang@gmail.com"
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/flight_simul.jpg"
            },
            {
                "title": "Experience",
                "items": [
                    "Software Developer at XE.com"
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/xe_picture.jpeg"
            },
            {
                "title": "Education",
                "items": [
                    "Master of Engineering Degree",
                    "University of Waterloo"
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/xe_picture.jpeg"
            }
        ];
        return (
            <PageWrapper>
                <BigTitle style={{ "text-align": "center" }}>ANQI HUANG</BigTitle>
                <StyledTabs defaultIndex={0} selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                    <StyledTabList>
                        {payloads.map(category => 
                            <StyledTab>{category.title}</StyledTab>
                        )}
                    </StyledTabList>
                    {payloads.map(category => 
                        <StyledTabPanel>
                            <PreviewSection
                                title={category.title}
                                items={category.items}
                                imageUrl={category.imageUrl}
                            />
                        </StyledTabPanel>
                    )}
                </StyledTabs>
            </PageWrapper>
        );
    }
}

export default Home;
