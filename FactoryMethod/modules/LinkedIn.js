import SocialNetwork from "./SocialNetwork.js";

export default class LinkedIn extends SocialNetwork {
  constructor() {
    super();
  }

  login({ email, password }) {
    // Authorization logic
    console.log(`Authorization on LinkedIn as ${email}`);
  }

  postMessage(message) {
    // Logic for publishing a message
    console.log(`Post a message on LinkedIn: ${message}`);
  }
}
