import { FormField } from "./modules/FormField.js";
import { OrderFormMediator } from "./modules/OrderFormMediator.js";

const mediator = new OrderFormMediator();

const deliveryDate = new FormField('deliveryDate');
const timeSlot = new FormField('timeSlot');
const isAnotherPerson = new FormField('isAnotherPerson');
const receiverName = new FormField('receiverName');
const receiverPhone = new FormField('receiverPhone');
const selfPickup = new FormField('selfPickup');

mediator.register('deliveryDate', deliveryDate);
mediator.register('timeSlot', timeSlot);
mediator.register('isAnotherPerson', isAnotherPerson);
mediator.register('receiverName', receiverName);
mediator.register('receiverPhone', receiverPhone);
mediator.register('selfPickup', selfPickup);

console.log('--- Вибираємо самовивіз ---');
selfPickup.setValue(true);
console.log({ deliveryDate, timeSlot, isAnotherPerson, receiverName, receiverPhone });

console.log('\n--- Вимикаємо самовивіз ---');
selfPickup.setValue(false);
console.log({ deliveryDate, timeSlot, isAnotherPerson, receiverName, receiverPhone });

console.log('\n--- Обираємо іншу особу як отримувача ---');
isAnotherPerson.setValue(true);
console.log({ isAnotherPerson, receiverName, receiverPhone });

console.log('\n--- Обираємо дату доставки ---');
deliveryDate.setValue('2024-11-12');
console.log({ deliveryDate, timeSlot });
