import { DeliveryStrategy } from "./DeliveryStrategy.js";

export class OwnDelivery extends DeliveryStrategy {
  constructor(baseFee, ratePerKm) {
    super();
    this.baseFee = baseFee;
    this.ratePerKm = ratePerKm;
  }

  calculateCost(distance) {
    return this.baseFee + this.ratePerKm * distance;
  }
}
