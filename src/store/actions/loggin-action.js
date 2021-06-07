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

export const saveID = (id) =>{
  return {
    type: "SAVEID",
    payload: id,
  }
}

export const toggleOpen = (boolean)=>{
  return {
    type: 'BOOLEAN',
    payload: boolean,
  };
}

export const loggout = ()=>{
  return {
    type: 'LOGOUT',
    payload: null,
  };
}
