import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-image: url('${props => props.src}');
    position: absolute;
    width: 260px;
    height: 260px;
    background-size: 100% 100%;
    margin: 20px 20px;
    box-shadow: 0 0 12px 12px #FFFFFF inset;
    border-radius: 8px;
`;

const ImageContainer = (props) => {
    return (
        <Wrapper src={props.src} />
    );
};

export default ImageContainer;