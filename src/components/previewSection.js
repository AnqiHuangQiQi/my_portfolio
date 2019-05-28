import React, {Component} from "react";
import styled from "styled-components";
import { MedTitle } from "./titles";

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
                <MedTitle>{title}</MedTitle>
                {contents}
            </PreviewContainer>
        );
    }
}

export default PreviewSection;