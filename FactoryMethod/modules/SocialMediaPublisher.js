export default class SocialMediaPublisher {
  constructor(socialNetwork) {
    this.socialNetwork = socialNetwork;
  }

  login(credentials) {
    this.socialNetwork.login(credentials);
  }

  post(message) {
    this.socialNetwork.postMessage(message);
  }
}
