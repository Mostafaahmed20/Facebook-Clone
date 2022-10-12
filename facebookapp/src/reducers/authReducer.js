export const initaliestate = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initaliestate, action) {
  switch (action.type) {
    default:
      return state;
  }
}
