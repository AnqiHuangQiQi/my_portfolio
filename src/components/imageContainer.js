import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
    float: left;
    width: 40%;
    height: 80%
    margin: 22px 30px;
`;

const ImageContainer = (props) => {
    return (
        <StyledImage src={props.src} />
    );
};

export default ImageContainer;