const ON_INCREMENT = "ON_INCREMENT";
const ON_DECREMENT = "ON_DECREMENT";
const ON_ADD_COUNTER = "ON_ADD_COUNTER";
const ON_DELETE_COUNTER = "ON_DELETE_COUNTER";

//par defaut l'état est vide pas de compteur
export default function counterReducer(state = [], action) {
  let index;
  switch (action.type) {
    case ON_ADD_COUNTER:
      state.push({
        id: new Date().getTime(),
        value: 0,
      });
      return [...state];
    case ON_DELETE_COUNTER:
      return state.filter((counter) => counter.id !== action.counterId);
    case ON_INCREMENT:
      //recupérer l'index du compteur a patir de son id
      index = state.findIndex((counter) => counter.id === action.counterId);
      if (index !== -1) {
        //augmenter la valeur
        const newCounter = { ...state[index] };
        newCounter.value++;
        state[index] = newCounter;
      }
      return [...state];
    case ON_DECREMENT:
      //recupérer l'index du compteur a patir de son id
      index = state.findIndex((counter) => counter.id === action.counterId);
      if (index !== -1) {
        const newCounter = { ...state[index] };
        newCounter.value--;
        state[index] = newCounter;
      }
      return [...state];
    default:
      return state;
  }
}

export function onIncrement(counterId) {
  const action = {
    type: ON_INCREMENT,
    counterId: counterId,
  };
  return action;
}
export function onDecrement(counterId) {
  const action = {
    type: ON_DECREMENT,
    counterId: counterId,
  };
  return action;
}
export function onAddCounter() {
  const action = {
    type: ON_ADD_COUNTER,
  };
  return action;
}
export function onDeleteCounter(counterId) {
  const action = {
    type: ON_DELETE_COUNTER,
    counterId: counterId,
  };
  return action;
}
