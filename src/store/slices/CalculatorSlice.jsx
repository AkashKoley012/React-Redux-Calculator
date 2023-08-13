import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
  name: 'Calculator',
  initialState: {
    equation: '0',
    operator: '0',
    solution: '0',
  },
  reducers: {
    addDigit(state, action) {
      if (state.equation.slice(-1) === '%') return state;
      if (state.operator === '0')
        return {
          equation: state.equation.slice(0, -1) + action.payload,
          operator: action.payload,
          solution: eval(
            (state.equation.slice(0, -1) + action.payload).replace('%', '/100')
          ),
        };
      if (action.payload === '.' && state.operator.includes('.')) return state;
      return {
        equation: state.equation + action.payload,
        operator: state.operator + action.payload,
        solution: eval((state.equation + action.payload).replace('%', '/100')),
      };
    },
    chooseOperator(state, action) {
      if (state.operator === '')
        return {
          ...state,
          equation: state.equation.slice(0, -1) + action.payload,
        };

      return {
        ...state,
        equation: state.equation + action.payload,
        operator: '',
      };
    },
    clear(state, action) {
      console.log(state, action);
      return {
        equation: '0',
        operator: '0',
        solution: '0',
      };
    },
    plusMinus(state, action) {
      console.log(action);
      let i = state.equation.length - 1;
      while (i > 0 && !['+', '-', '*', '/'].includes(state.equation.charAt(i)))
        i--;
      if (state.operator.charAt(0) === '-')
        return {
          equation: state.equation.slice(0, i) + state.equation.slice(i + 1),
          operator: state.operator.slice(1),
          solution: eval(
            (state.equation.slice(0, i) + state.equation.slice(i + 1)).replace(
              '%',
              '/100'
            )
          ),
        };
      if (['+', '-'].includes(state.equation.charAt(i))) {
        const changeChar = state.equation.charAt(i) === '+' ? '-' : '+';
        return {
          ...state,
          equation:
            state.equation.slice(0, i) +
            changeChar +
            state.equation.slice(i + 1),
          solution: eval(
            (
              state.equation.slice(0, i) +
              changeChar +
              state.equation.slice(i + 1)
            ).replace('%', '/100')
          ),
        };
      }
      if (i !== 0) i++;
      return {
        equation: state.equation.slice(0, i) + '-' + state.equation.slice(i),
        operator: '-' + state.operator,
        solution: eval(
          (state.equation.slice(0, i) + '-' + state.equation.slice(i)).replace(
            '%',
            '/100'
          )
        ),
      };
    },
    percentage(state, action) {
      console.log(action);
      if (state.equation.includes('%')) return state;
      return {
        ...state,
        equation: state.equation + '%',
        operator: state.operator + '%',
        solution: eval(state.equation + '/100'),
      };
    },
    evaluate(state, action) {
      console.log(action);
      return {
        ...state,
        equation: eval(state.equation.replace('%', '/100')),
      };
    },
  },
});

export default calculatorSlice.reducer;
export const {
  addDigit,
  chooseOperator,
  clear,
  plusMinus,
  percentage,
  evaluate,
} = calculatorSlice.actions;
