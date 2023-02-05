import { combineReducers, createStore } from "redux";

const initialState = [
  { id: "e1", description: "work income", value: "1000", isExpense: false },
  { id: "e2", description: "water bills", value: "105", isExpense: true },
  { id: "e3", description: "rents", value: "100", isExpense: true },
  { id: "e4", description: "power bills", value: "20", isExpense: true },
];

const reducer = (state = initialState, action) => {
  if (action.type === "ADD_ENTRY") {
    const newState = [...state, action.payload];
    return newState;
  }
  if (action.type === "DELETE_ENTRY") {
    const newState = state.filter((item) => {
      return item.id !== action.payload;
    });
    return newState;
  }
  return state;
};
const rootReducer = combineReducers({
  entries: reducer,
});
const store = createStore(rootReducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({
//   type: "ADD_ENTRY",
//   payload: {
//     id: "e4",
//     description: "power bills",
//     value: "20",
//     isExpense: true,
//   },
// });

export default store;
