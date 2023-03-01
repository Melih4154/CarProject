export default function authHeader() {
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
  