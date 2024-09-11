import SocialNetwork from "./SocialNetwork.js";

export default class Facebook extends SocialNetwork {
  constructor() {
    super();
  }

  login({ login, password }) {
    // Authorization logic
    console.log(`Authorization on Facebook as ${login}`);
  }

  postMessage(message) {
    // Logic for publishing a message
    console.log(`Post a message on Facebook: ${message}`);
  }
}
