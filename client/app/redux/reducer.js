// reducer.js
// Redux reducer here

const reducer = (state, action) => {
  switch(action.type) {
    case 'GENERATE_BOARD':
      const height = action.height;
      const width = action.width;
      let newBoard = [];
      for (var i = 0; i < height; i++) {
        let tempRow = [];
        for (var j = 0; j < width; j++) {
          let temp = Math.round(Math.random());
          tempRow.push(temp);
        }
        newBoard.push(tempRow);
      }
      return Object.assign({}, {height, width, board: newBoard});
    default: 
      return state;
  }
};

export default reducer;
