// actions.js
// Contains Redux action creators

let actions = {
  // TODO: Add some actions...
  // action: (state) => {
  //   type: 'ACTION',
  //   state
  // },
  genBoard: (height, width) => ({
    type: 'GENERATE_BOARD',
    height,
    width
  }),
  nextBoard: () => {

  }
};

export default actions;
