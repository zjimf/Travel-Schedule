function HandleErrorMsg(msg) {
  switch (msg) {
    case "auth/invalid-email":
      return "Invalid-email";
    case "auth/invalid-password":
      return "Invalid-password";
    case "auth/email-already-in-use":
      return "Email-already-in-use";
    case "auth/weak-password":
      return "Weak-password";
    case "auth/wrong-password":
      return "Wrong-password";
    case "auth/user-not-found":
      return "User-not-found";
    case "auth/invalid-login-credentials":
      return "Invalid-login-credentials";
    default:
      return "";
  }
}

export { HandleErrorMsg };
