// send the user as an object with its name and pass

export const verifyUser = (user) => {
    return {
        type: "VERIFYUSER",
        payload: user,
    }
};

export const validateToken = (token)=>{
    return {
        type: "VALIDATETOKEN",
        payload: token,
    }
}

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
