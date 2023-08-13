import styled from 'styled-components';
import { ThreeDot } from '../components';
import { useSelector } from 'react-redux';

const Screen = () => {
  const data = useSelector((state) => {
    return state.calculator;
  });
  return (
    <ScreenStyle>
      <ThreeDot />
      <PreviousOperand>{data.solution}</PreviousOperand>
      <CurrentOperand>{data.equation}</CurrentOperand>
    </ScreenStyle>
  );
};

const ScreenStyle = styled.section`
  grid-column: 1/-1;
  background-color: rgba(0, 0, 0, 0.75);
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 10px 10px 0px 0px;
  padding: 0.75rem;
  word-wrap: break-word;
  word-break: break-all;
`;

const PreviousOperand = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.5rem;
`;

const CurrentOperand = styled.div`
  color: white;
  font-size: 3rem;
`;

export default Screen;
