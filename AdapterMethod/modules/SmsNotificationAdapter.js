import { Notification } from "./Notificaion.js";

export class SMSNotificationAdapter extends Notification {
  constructor(smsService, phone, sender) {
    super();
    this.smsService = smsService;
    this.phone = phone;
    this.sender = sender;
  }

  send(title, message) {
    this.smsService.sendSMS(this.phone, this.sender, title, message);
  }
}

export class SMSService {
  sendSMS(phone, sender, title, message) {
    console.log(
      `Sent SMS with title '${title}' from '${sender}' to phone '${phone}' that says '${message}'.`
    );
  }
}
