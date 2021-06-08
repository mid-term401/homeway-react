export const checkUserType = (userType) => {
  return {
    type: "CHECKUSERTYPE",
    payload: userType,
  };
};

export const checkCookie = () => {
  return {
    type: "CHECKCOOKIE",
    payload: null,
  };
};
