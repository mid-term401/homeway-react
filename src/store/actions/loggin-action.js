// send the user as an object with its name and pass


export const isLoggin = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const isLoggout = (user) => {
  return {
    type: "LOGOUT",
    payload: user,
  };
};

export const reset = () => {
  return {
    type: "RESET",
    payload: null,
  };
};
