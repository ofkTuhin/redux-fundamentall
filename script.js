// dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const initialState = {
  value: 0,
};
// reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        value: state.value + 1,
      };
    case "decrement":
      return {
        ...state,
        value: state.value - 1,
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
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
