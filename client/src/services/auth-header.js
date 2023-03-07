export const  authHeader = ()=> {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.tokens.access_token) {
    // For Spring Boot back-end
    return { Authorization: "Bearer " + user.tokens.access_token };

    // for Node.js Express back-end
    //return { "x-access-token": user.tokens.access_token };
  } else {
    return {};
  }
}


export const  authAndFileHeader = ()=> {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.tokens.access_token) {
    // For Spring Boot back-end
    return { Authorization: "Bearer " + user.tokens.access_token, "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>" };

    // for Node.js Express back-end
    //return { "x-access-token": user.tokens.access_token };
  } else {
    return {};
  }
}
