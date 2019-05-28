import styled from "styled-components";

const StyledImage = styled.img`

`;

const ImageContainer = (props) => {
    return (
        <StyledImage src={props.src} />
    );
};

export default ImageContainer;