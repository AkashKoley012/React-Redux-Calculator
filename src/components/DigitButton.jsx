import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addDigit } from '../store/slices/CalculatorSlice';

const DigitButton = (props) => {
  const dispatch = useDispatch();
  return (
    <ButtonStyle
      digit={props.digit}
      onClick={() => dispatch(addDigit(props.digit))}
    >
      {props.digit}
    </ButtonStyle>
  );
};

const leftButtons = ['7', '4', '1', '0'];
const buttomButtons = ['0', '.'];
const ButtonStyle = styled.button`
  grid-column: ${(props) => (props.digit === '0' ? 'span 2' : 'span 1')};
  cursor: pointer;
  font-size: 2rem;
  border: none;
  border-left: ${(props) =>
    leftButtons.includes(props.digit) ? 'none' : '1px solid black'};
  border-bottom: ${(props) =>
    buttomButtons.includes(props.digit) ? 'none' : '1px solid black'};
  outline: none;
  background-color: lightgray;
`;

DigitButton.propTypes = {
  digit: PropTypes.string.isRequired,
};

export default DigitButton;
