export class FormField {
  constructor(name) {
    this.name = name;
    this.value = null;
    this.enabled = true;
    this.required = false;
    this.mediator = null;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }

  setValue(value) {
    this.value = value;
    if (this.mediator) {
      this.mediator.notify(this, 'valueChanged');
    }
  }

  setEnabled(enabled) {
    this.enabled = enabled;
  }

  setRequired(required) {
    this.required = required;
  }
}