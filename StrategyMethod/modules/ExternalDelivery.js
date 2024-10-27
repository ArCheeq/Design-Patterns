import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class ExternalDelivery extends DeliveryStrategy {
  constructor(ratePerKm) {
    super();
    this.ratePerKm = ratePerKm;
  }

  calculateCost(distance) {
    return this.ratePerKm * distance;
  }
}
