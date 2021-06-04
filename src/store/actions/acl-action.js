
export const acl = (capabilities) => {
    return {
        type: "OKTORENDER",
        payload: capabilities,
    }
};

export const checkUserType = (userType) => {
    return {
        type: "CHECKUSERTYPE",
        payload: userType,
    }
};

// export const read = (capabilities) => {
//     return {
//         type: "READ",
//         payload: capabilities,
//     }
// };

// export const update = (capabilities) => {
//     return {
//         type: "UPDATE",
//         payload: capabilities,
//     }
// };

// export const deleteAcl = (capabilities) => {
//     return {
//         type: "DELETE",
//         payload: capabilities,
//     }
// };

// export const addService = (capabilities) => {
//     return {
//         type: "ADDSERVICE",
//         payload: capabilities,
//     }
// };