const initState = {
  users: [
    { id: 1, name: "teo" },
    { id: 2, name: "ti" },
    { id: 3, name: "tam" },
  ],
  posts: [],
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    case "CREATE_USER":
      let idRandom = Math.floor(Math.random() * 100000);
      let user = { id: idRandom, name: `random name ${idRandom}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default rootReducer;
