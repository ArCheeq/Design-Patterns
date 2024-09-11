export default class SocialNetwork {
  constructor() {
    if (this.constructor === SocialNetwork) {
      throw new Error(
        "The abstract class SocialNetwork cannot be created without a subclass"
      );
    }
  }

  login(credentials) {
    throw new Error("The login method must be implemented in a subclass");
  }

  postMessage(message) {
    throw new Error("The postMessage method must be implemented in a subclass");
  }
}
