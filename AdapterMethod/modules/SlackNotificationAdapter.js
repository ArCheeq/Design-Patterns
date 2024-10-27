import { Notification } from "./Notificaion.js";

export class SlackNotificationAdapter extends Notification {
  constructor(slackService, login, apiKey, chatId) {
    super();
    this.slackService = slackService;
    this.login = login;
    this.apiKey = apiKey;
    this.chatId = chatId;
  }

  send(title, message) {
    this.slackService.sendMessage(
      this.login,
      this.apiKey,
      this.chatId,
      title,
      message
    );
  }
}

export class SlackService {
  sendMessage(login, apiKey, chatId, title, message) {
    console.log(
      `Sent Slack message with title '${title}' to chat '${chatId}' that says '${message}'.`
    );
  }
}
