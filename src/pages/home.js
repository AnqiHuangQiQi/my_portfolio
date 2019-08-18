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
                    "Name - Anqi Huang",
                    "Hobbies - Dance, Workout, Swim, Travel, Paint, Try new things",
                    {
                        "Tech Stack" : [
                            "Java, PHP, Javascript, React, Node, python, SQL",
                            "Web Development",
                            "AWS, Apache, MySQL"
                        ]
                    },
                    {
                        "Contact Information" : [
                            "Email - a45huang@gmail.com",
                            "Linkedin - https://www.linkedin.com/in/anqi-huang-113698103/"
                        ]
                    }
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/flight_simul.jpg"
            },
            {
                "title": "Experience",
                "items": [
                    {
                        "Software Developer at XE.com": [
                            "Time - From 2017 May to Present",
                            "Product - https://www.xe.com",
                            "Develop, maintain and enhance our web app",
                            "Respect security and privacy issues",
                            "Ensure components scalable and maintainable",
                            "Communicate technical problems and solutions"
                        ]
                    }
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/xe_picture.jpeg"
            },
            {
                "title": "Education",
                "items": [
                    {
                        "Master of Engineering" : [
                            "University of Waterloo   2015/09 - 2017/06",
                            "Major - Electrical & Computer Engineering",
                            "GPA - 92.75/100",
                            "Link - https://uwaterloo.ca/"
                        ]
                    },
                    {
                        "Bachelor of Engineering" : [
                            "Nanjing University of Aeronautics and Astronautics   2011/09 - 2015/06",
                            "Major - Electrical Engineering & Automation",
                            "GPA - 3.9/5.0",
                            "Link - http://iao.nuaa.edu.cn/"
                        ]
                    }
                ],
                "imageUrl": "https://anqiportfolioimages.s3.amazonaws.com/images/graduate_picture.jpg"
            }
        ];
        let numOfCategories = payloads.length;
        return (
            <PageWrapper>
                <BigTitle style={{ "textAlign": "center" }}>ANQI HUANG</BigTitle>
                <StyledTabs defaultIndex={0} selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
                    <StyledTabList>
                        {payloads.map((category, index) => 
                            <StyledTab key={index}>{category.title}</StyledTab>
                        )}
                    </StyledTabList>
                    {payloads.map((category, index) => 
                        <StyledTabPanel numofcategories={numOfCategories} key={index}>
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
