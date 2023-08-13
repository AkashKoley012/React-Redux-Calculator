import { useDispatch } from 'react-redux';
import { DigitButton, OperationButton } from '../components';
import {
  chooseOperator,
  clear,
  evaluate,
  percentage,
  plusMinus,
} from '../store/slices/CalculatorSlice';
const Buttons = () => {
  const dispatch = useDispatch();
  return (
    <>
      <OperationButton operation="C" handleClick={() => dispatch(clear())} />
      <OperationButton
        operation="+/-"
        handleClick={() => dispatch(plusMinus())}
      />
      <OperationButton
        operation="%"
        handleClick={() => dispatch(percentage())}
      />
      <OperationButton
        operation="/"
        handleClick={() => dispatch(chooseOperator('/'))}
      />
      <DigitButton digit="7" />
      <DigitButton digit="8" />
      <DigitButton digit="9" />
      <OperationButton
        operation="*"
        handleClick={() => dispatch(chooseOperator('*'))}
      />
      <DigitButton digit="4" />
      <DigitButton digit="5" />
      <DigitButton digit="6" />
      <OperationButton
        operation="-"
        handleClick={() => dispatch(chooseOperator('-'))}
      />
      <DigitButton digit="1" />
      <DigitButton digit="2" />
      <DigitButton digit="3" />
      <OperationButton
        operation="+"
        handleClick={() => dispatch(chooseOperator('+'))}
      />
      <DigitButton digit="0" color="red" />
      <DigitButton digit="." />
      <OperationButton operation="=" handleClick={() => dispatch(evaluate())} />
    </>
  );
};

export default Buttons;
