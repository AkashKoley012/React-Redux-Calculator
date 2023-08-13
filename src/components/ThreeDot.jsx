import styled from "styled-components";

styled;

const ThreeDot = () => {
    return (
        <DotContainer>
            <Dot color="red" />
            <Dot color="yellow" />
            <Dot color="green" />
        </DotContainer>
    );
};

const DotContainer = styled.div`
    display: flex;
    width: -webkit-fill-available;
`;

const Dot = styled.div`
    width: 15px;
    height: 15px;
    margin: 0rem 0.5rem 0.5rem 0rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

export default ThreeDot;
