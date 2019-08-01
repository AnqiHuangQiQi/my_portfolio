import React, {Component} from "react";
import styled from "styled-components";
import { MedTitle } from "./titles";
import ImageContainer from "./imageContainer";

const PreviewContainer = styled.div`

`;

const OrderedList = styled.ol`

`;

const ListItem = styled.li`

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
                    {items.map((item, index) => (
                        <ListItem key={index}>{item}</ListItem>
                    ))}
                </OrderedList>
            );
        }

        return (
            <PreviewContainer>
                { imageUrl && <ImageContainer src={imageUrl} />}
                <MedTitle>{title}</MedTitle>
                {contents}
            </PreviewContainer>
        );
    }
}

export default PreviewSection;