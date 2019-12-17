'user strict';
class StringBuilder {
  constructor (value) {
    this.value = value;
  }
  get(value) {
    return this.value;
  }
  append(value) {
    this.value = this.value + value;
  }
  prepend(value) {
    this.value = value + this.value;
  }
  pad(value) {
    this.value = value + this.value + value;
  }
};
const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='