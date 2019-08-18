import React, {Component} from "react";
import styled from "styled-components";
import { MedTitle, SmallTitle } from "./titles";
import ImageContainer from "./imageContainer";

const PreviewContainer = styled.div`

`;

const OrderedList = styled.ol`

`;

const ListItem = styled.li`
    line-height: 22px;
    list-style: none;
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 2px 2px 3px #5680E9;
    :before {
        content: "●";
        color: #FFFFFF;
        display: inline-block; 
        width: 1.3em;
        margin-left: -1em;
    }
`;

class PreviewSection extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const { title, items } = this.props;
        let imageUrl = this.props.imageUrl;
        let contents = null;

        if (items != null && items.length > 0) {
            contents = (
                <OrderedList>
                    {items.map((item, index) => {
                        if (typeof item == "string") {
                            return <ListItem key={index}>{item}</ListItem>;
                        } else {
                            console.log(item);
                            const entry = Object.entries(item)[0];
                            return (
                                <React.Fragment key={index}>
                                    <SmallTitle>{entry[0]}</SmallTitle>
                                    {entry[1].map(value => 
                                        <ListItem>{value}</ListItem>
                                    )}
                                </React.Fragment>
                            );
                        }
                    })}
                </OrderedList>
            );
        }

        return (
            <PreviewContainer>
                { imageUrl && <ImageContainer src={imageUrl} /> }
                <div style={{ "float": "right", "marginRight": "20px", "marginLeft": "46%" }}>
                    <MedTitle>{title}</MedTitle>
                    {contents}
                </div>
            </PreviewContainer>
        );
    }
}

export default PreviewSection;