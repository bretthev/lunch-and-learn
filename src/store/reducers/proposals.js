const proposals = ( state = [], action ) => {
  console.log(action)
  switch(action.type) {
    case "ADD_PROPOSAL":
      return state.concat({
        author: action.author,
        title: action.title,
        body: action.body
      });
      default:
        return state;
  };
};

export default proposals
