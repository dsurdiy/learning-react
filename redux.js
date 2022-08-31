// 1. зробили action

// const deposit = amount => {
//   return {
//     type: 'deposit',
//     payload: { amount },
//   };
// };

// 2. зробили reducer щоб обробляти action

// function fundsReduser(state = 0, action) {
//   switch (action.type) {
//     case 'deposit':
//       return state + action.payload.payload;

//     default:
//       return state;
//   }
// }

// 3. зробили store щоб зареєструвати та ініціалізувати

// const store = createStore(fundsReduser);

// 4. привʼязали до компонента та відправляєм action

{
  /* <button onClick={REDUX.dispatch(deposit(100))}></button>; */
}
