export const reset = () => {
  return {
    type: "RESET",
    payload: null,
  };
};

export const removeCookie =()=>{
  return {
    type: "REMOVECOOKIE",
    payload: null,
  };
}