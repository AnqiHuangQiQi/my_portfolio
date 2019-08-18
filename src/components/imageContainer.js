import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background-image: url('${props => props.src}');
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    box-shadow: 0 0 12px 12px #FFFFFF inset;
    border-radius: 8px;
`;

const ImageContainer = (props) => {
    return (
        <div style={{ 
            "width": "40%",
            "height": "70%",
            "position": "absolute",
            "margin": "20px 20px"
        }}>
            <Wrapper src={props.src} />
        </div>
    );
};

export default ImageContainer;