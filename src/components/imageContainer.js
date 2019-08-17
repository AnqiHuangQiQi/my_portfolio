import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
    float: left;
    height: 60%;
    width: 40%;
    overflow-y: hidden;
    margin: 0px 20px;
`;

const ImageContainer = (props) => {
    return (
        <StyledImage src={props.src} />
    );
};

export default ImageContainer;