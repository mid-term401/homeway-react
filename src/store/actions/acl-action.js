export const checkUserType = (userType) => {
    return {
        type: "CHECKUSERTYPE",
        payload: userType,
    }
};