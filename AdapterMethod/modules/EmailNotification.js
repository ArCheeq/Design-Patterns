import { Notification } from "./Notificaion.js";

export class EmailNotification extends Notification {
  constructor(adminEmail) {
    super();
    this.adminEmail = adminEmail;
  }

  send(title, message) {
    console.log(
      `Sent email with title '${title}' to '${this.adminEmail}' that says '${message}'.`
    );
  }
}
