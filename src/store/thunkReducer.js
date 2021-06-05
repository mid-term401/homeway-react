let initalState = { results: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET":
      console.log('get request', payload);
      return payload;

    case "POST":
      return payload;
      
    case "PUT":
      return payload;

    case "DELETE":
      return payload;

    default:
      return state;
  }
};
