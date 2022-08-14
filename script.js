// dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const initialState = {
  value: 0,
};

// action identifire

const INCREMENT = "increment";
const DECREMENT = "deccrement";

// action creator

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

// store
const store = Redux.createStore(reducer);
// render
const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();
// subscription
store.subscribe(render);

// action
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(3));
});
