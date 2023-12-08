interface CounterState {
    counter: number;
  }
  
  const initialState: CounterState = {
    counter: 2
  };
  
  type CounterAction = { type: 'INCREMENT' } | { type: 'DECREMENT' };
  
  const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
    switch(action.type){
      case 'INCREMENT':
        console.log('INCREMENT');
        return {
          ...state,
          counter: state.counter + 1
        };
      case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        return state;
    }
  }
  
  export default counterReducer;
  