import { Buttons, Screen } from "./components";
import styled from "styled-components";

const App = () => {
    return (
        <Calculator>
            <Screen />
            <Buttons />
        </Calculator>
    );
};

const Calculator = styled.section`
    display: grid;
    margin-top: 2rem;
    justify-content: center;
    border-radius: 10px;
    grid-template-columns: repeat(4, 6rem);
    grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`;

export default App;
