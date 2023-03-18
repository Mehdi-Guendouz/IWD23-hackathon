export let initialState = {
    user: {},
  };
  
  export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "LOGIN_USER":
        return {
          user: action.user,
        };
      case "LOGOUT_USER":
        return {
          user: null,
        };
      default:
        return state;
    }
  };