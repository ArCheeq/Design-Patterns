import Facebook from "./Facebook.js";
import LinkedIn from "./LinkedIn.js";

export default class SocialNetworkFactory {
  createSocialNetwork(type) {
    if (type === "linkedin") return new LinkedIn();
    if (type === "facebook") return new Facebook();
    throw new Error("Unknown type of social network");
  }
}
