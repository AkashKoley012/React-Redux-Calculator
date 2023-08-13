import PropTypes from 'prop-types';
import styled from 'styled-components';

const OperationButton = (props) => {
  return (
    <ButtonStyle operation={props.operation} onClick={props.handleClick}>
      {props.operation}
    </ButtonStyle>
  );
};

const colorButton = ['/', '*', '-', '+', '='];
const ButtonStyle = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: none;
  border-left: ${(props) =>
    props.operation === 'C' ? 'none' : '1px solid black'};
  border-bottom: ${(props) =>
    props.operation === '=' ? 'none' : '1px solid black'};
  outline: none;
  background-color: ${(props) =>
    colorButton.includes(props.operation) ? '#f79231' : 'lightgray'};
`;

OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OperationButton;
