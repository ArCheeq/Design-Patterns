export class OrderFormMediator {
  constructor() {
    this.fields = {};
  }

  register(fieldName, field) {
    this.fields[fieldName] = field;
    field.setMediator(this);
  }

  notify(sender, event) {
    if (event === 'valueChanged') {
      this.handleFieldChange(sender);
    }
  }

  handleFieldChange(field) {
    if (field.name === 'deliveryDate') {
      this.updateTimeSlots(field.value);
    } else if (field.name === 'isAnotherPerson') {
      const isEnabled = field.value === true;
      this.fields['receiverName'].setEnabled(isEnabled);
      this.fields['receiverPhone'].setEnabled(isEnabled);
      this.fields['receiverName'].setRequired(isEnabled);
      this.fields['receiverPhone'].setRequired(isEnabled);
    } else if (field.name === 'selfPickup') {
      const isEnabled = !field.value;
      this.fields['deliveryDate'].setEnabled(isEnabled);
      this.fields['timeSlot'].setEnabled(isEnabled);
      this.fields['isAnotherPerson'].setEnabled(isEnabled);
      this.fields['receiverName'].setEnabled(isEnabled && this.fields['isAnotherPerson'].value);
      this.fields['receiverPhone'].setEnabled(isEnabled && this.fields['isAnotherPerson'].value);
    }
  }

  updateTimeSlots(date) {
    console.log(`Updated time slots for delivery date: ${date}`);
  }
}
