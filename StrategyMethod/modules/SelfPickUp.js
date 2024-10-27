import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class SelfPickup extends DeliveryStrategy {
  calculateCost() {
    return 0;
  }
}
