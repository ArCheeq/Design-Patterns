import { ExternalDelivery } from "./modules/ExternalDelivery.js";
import { OwnDelivery } from "./modules/OwnDelivery.js";
import { SelfPickup } from "./modules/SelfPickUp.js";

function calculateDeliveryCost(strategy, distance) {
  return strategy.calculateCost(distance);
}

const distance = 10;

const selfPickup = new SelfPickup();
const externalDelivery = new ExternalDelivery(5);
const ownDelivery = new OwnDelivery(20, 3);

console.log("Cost of Self Pickup:", calculateDeliveryCost(selfPickup));
console.log(
  "Cost of External Delivery:",
  calculateDeliveryCost(externalDelivery, distance)
);
console.log(
  "Cost of Own Delivery:",
  calculateDeliveryCost(ownDelivery, distance)
);
