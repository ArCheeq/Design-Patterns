import { EmailNotification } from "./modules/EmailNotification.js";
import {
  SlackNotificationAdapter,
  SlackService,
} from "./modules/SlackNotificationAdapter.js";
import {
  SMSNotificationAdapter,
  SMSService,
} from "./modules/SmsNotificationAdapter.js";

const emailNotification = new EmailNotification("admin@example.com");
emailNotification.send("Email Title", "This is an email message.");

const slackService = new SlackService();
const slackNotification = new SlackNotificationAdapter(
  slackService,
  "userLogin",
  "apiKey",
  "chatId123"
);
slackNotification.send("Slack Title", "This is a Slack message.");

const smsService = new SMSService();
const smsNotification = new SMSNotificationAdapter(
  smsService,
  "1234567890",
  "SenderName"
);
smsNotification.send("SMS Title", "This is an SMS message.");
