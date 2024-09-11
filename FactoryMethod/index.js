import SocialNetworkFactory from "./modules/SocialNetworkFactory.js";
import SocialMediaPublisher from "./modules/SocialMediaPublisher.js";

const factory = new SocialNetworkFactory();

const facebook = factory.createSocialNetwork("facebook");
const facebookPublisher = new SocialMediaPublisher(facebook);
facebookPublisher.login({ login: "user", password: "password" });
facebookPublisher.post("Це моє перше повідомлення у Facebook!");

const linkedin = factory.createSocialNetwork("linkedin");
const linkedInPublisher = new SocialMediaPublisher(linkedin);
linkedInPublisher.login({ email: "user@mail.com", password: "password" });
linkedInPublisher.post("Це моє перше повідомлення у LinkedIn!");
